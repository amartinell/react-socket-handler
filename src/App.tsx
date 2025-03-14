import {SocketProvider} from "./socket/SocketProvider.tsx";
import {UselessComponent} from "./UselessComponent.tsx";
import {TableProvider} from "./table/TableProvider.tsx";

function App() {
  return (
    <TableProvider>
      <SocketProvider>
        <UselessComponent />
      </SocketProvider>
    </TableProvider>
  )
}

export default App
