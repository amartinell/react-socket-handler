import {useSocket} from "./socket/SocketProvider.tsx";

export const Tree = () => {
  const { contentTree } = useSocket()
  return (
    <div>
      <h1>Tree</h1>
      <ul>
        <TreeSlice elements={contentTree} />
      </ul>
    </div>
  )
}

const TreeSlice = ({elements}: any) => {
  const {joinChannel} = useSocket()

  return elements.map((el: any) => (
    <li key={el.id}>
      {el.label} {el.channel ? <button onClick={() => joinChannel(el.channel)}>Join</button> : null}
      {el.children && (
        <ul>
          <TreeSlice elements={el.children} />
        </ul>
      )}
    </li>
  ))
}