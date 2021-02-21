import "./assets/styles/App.scss";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./components/Home";
import Users from "./components/Users";
import Header from "./components/Header";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <div className="content">
        <Route exact path="/" component={Home}></Route>
        <Route exact path="/users" component={Users}></Route>
      </div>
    </BrowserRouter>
  );
}

export default App;
