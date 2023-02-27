import './App.css';
import UsersList from "./components/Users-list";
import { Route, Routes} from "react-router-dom";
import User from "./components/User";


function App() {

    return (
        <Routes>
            <Route path="/" element={<UsersList />} />
            <Route path="/users/:id" element={<User/>} />
        </Routes>
    )
}
export default App;