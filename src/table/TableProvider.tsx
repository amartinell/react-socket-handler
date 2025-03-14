import {createContext, FC, ReactNode, useContext, useState} from "react";

const TableContext = createContext<{
  data: any[],
  fillTableData: (newData: any[]) => void,
  appendTableData: (newData: any[]) => void,
  updateTableDataById: (newData: any) => void,
  clearTableData: () => void,
}>({
  data: [],
  fillTableData: () => {},
  appendTableData: () => {},
  updateTableDataById: () => {},
  clearTableData: () => {},
})

type TableProviderProps = {
  children: ReactNode
}

export const TableProvider: FC<TableProviderProps> = ({children}) => {
  const [data, setTableData] = useState<any[]>([])

  const fillTableData = (newData: any[]) => setTableData(newData)
  const appendTableData = (newData: any[]) => setTableData((prevData) => [...prevData, ...newData])
  const updateTableDataById = (newData: any) => setTableData((prevData) => prevData.map((row) => row.id === newData.id ? newData : row))
  const clearTableData = () => setTableData([])

  return (
    <TableContext.Provider value={{ data, fillTableData, appendTableData, updateTableDataById, clearTableData }}>
      {children}
    </TableContext.Provider>
  )
}

export const useTable = () => useContext(TableContext)