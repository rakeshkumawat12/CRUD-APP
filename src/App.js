import './App.css';
import { AddUser } from './Components/AddUser';
import { EditUser } from './Components/EditUser';
import { Home } from './Components/Home';
import { BrowserRouter as Router, Routes, Route, } from "react-router-dom";
import { GlobalProvider } from "./context/GlobalState";

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <GlobalProvider>
        <Router>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/add" element={<AddUser />} />
            <Route exact path="/edit/:id" element={<EditUser />} />
          </Routes>
        </Router>
      </GlobalProvider>
    </div>
  );
}

export default App;
