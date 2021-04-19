import { useState } from "react";
import ListUsers from "./listUsers";
import CreateUser from './createUser'

function App() {
  const [showList, setShowList] = useState(false);
  const [showCreate, setShowCreate] = useState(false);

  return (
    <div>
      Goodbye
      <button onClick={() => setShowList(!showList)}>Show Users</button>
      <button onClick={() => setShowCreate(!showCreate)}>Create user</button>
      <CreateUser showCreate={showCreate} />
          <ListUsers showUsers={showList} />
    </div>
  );
}

export default App;
