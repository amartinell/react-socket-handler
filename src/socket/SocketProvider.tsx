import {createContext, FC, ReactNode, useContext, useEffect, useMemo} from "react";
import {useQuery} from "@tanstack/react-query";
import {makeSocketConnection} from "./socket.ts";
import {useTable} from "../table/TableProvider.tsx";

type SocketContextProps = {
  contentTree: any,
  treeMap: Map<any, any>,
  isLoadingContentTree: boolean,
  joinChannel: (channelToJoin: string) => void,
  leaveChannel: (channelToLeave: string) => void,
}

const SocketContext = createContext<SocketContextProps>({
  contentTree: [],
  treeMap: new Map(),
  isLoadingContentTree: false,
  joinChannel: () => {},
  leaveChannel: () => {},
})

type SocketProviderProps = {
  children: ReactNode
}

const updateContentTreeMap = (contentTree: any, treeMap: Map<any, any>) => {
  contentTree.forEach((node: any) => {
    treeMap.set(node.id, node)

    if (node.children && Array.isArray(node.children)) {
      updateContentTreeMap(node.children, treeMap)
    }
  })
}

export const SocketProvider: FC<SocketProviderProps> = ({children}) => {
  const { appendTableData, updateTableDataById } = useTable()
  const treeMap = new Map()

  // Tree will never change, so we can use staleTime: Infinity
  const {data: contentTree = [], isPending: isLoadingContentTree} = useQuery({
    queryKey: ['contentTree'],
    queryFn: async () => {
      const tree = await fetch('/api/v1/platform/contents')
      const treeJSON = await tree.json()
      updateContentTreeMap(treeJSON, treeMap)
      return treeJSON
    },
    staleTime: Infinity,
  })

  // On mount...
  const { joinChannel, leaveChannel, removeAllSocketListeners, joinedChannels } = useMemo(() => {
    return makeSocketConnection({
      handleDataMessage: (data: any) => {
        console.log('data', data)
        appendTableData(data)
      },
      handleDoneMessage: () => {
        console.log('done')
      },
      handleUpdateMessage: (data: any) => {
        console.log('update', data)
        updateTableDataById(data)
      },
    })
  }, []);

  useEffect(() => {
    // On mount...
    // If there are any channels that were joined before, rejoin them
    if (joinedChannels.size) {
      joinedChannels.forEach((channel) => {
        console.log('Rejoining channel', channel)
        joinChannel(channel)
      })
    }

    // On unmount...
    // Leave all channels and remove all listeners
    return () => {
      removeAllSocketListeners()
      joinedChannels.forEach((channel) => leaveChannel(channel))
    }
  }, []);

  return (
    <SocketContext.Provider value={{
      contentTree,
      treeMap,
      isLoadingContentTree,
      joinChannel,
      leaveChannel,
    }}>
      {children}
    </SocketContext.Provider>
  )
}

export const useSocket = () => {
  return useContext(SocketContext)
}