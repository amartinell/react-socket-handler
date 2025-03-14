import {useTable} from "./TableProvider.tsx";

export const Table = () => {
  const {data} = useTable()
  return (
    <div>
      <h1>Table</h1>
      {data.map((row) => {
        return (<div key={row.id}>
          <span>{row.id}</span>
          <span>{row.label}</span>
        </div>)
      })}
    </div>
  )
}