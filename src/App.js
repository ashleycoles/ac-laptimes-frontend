import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import './App.css';
import Leaderboard from "./Components/Leaderboard";
import Login from "./Components/Login";

class App extends React.Component {
    render() {
        return (
            <Router>
                <nav>
                    <ul>
                        <li>
                            <Link to="/login">Login</Link>
                        </li>
                        <li>
                            <Link to="/leaderboard">Leaderboard</Link>
                        </li>
                    </ul>
                </nav>
                <Switch>
                    <Route path="/login" component={Login} />
                    <Route path="/leaderboard" component={Leaderboard} />
                </Switch>
            </Router>
        )
    }
}

export default App;
