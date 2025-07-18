import Panel from "./components/panel/Panel"
import { TodoList } from "./components/todos/TodoList"
import UserList from "./components/users/UsersList"
import { sidePanelSections } from "./lib/constants"

const App = () => {
    return (
        <div>
            <Panel sections={sidePanelSections}/>
        </div>
    )
}

export default App