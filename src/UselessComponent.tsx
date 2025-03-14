import {Tree} from "./Tree.tsx";
import {Table} from "./table/Table.tsx";

export const UselessComponent = () => {
  return (
    <div className="grid grid-cols-4 gap-4">
      <Tree />
      <Table />
    </div>
  )
}