import "./App.css";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import HomePage from "./pages/HomePage";
import InfoPage from "./pages/InfoPage";

function App() {
  return (
    <Router>
      <Switch>
        <Route key="HomePage" exact path={["/", "/HomePage"]}>
          <HomePage />
        </Route>

        <Route key="InfoPage" exact path="/InfoPage">
          <InfoPage />
        </Route>

        {/*         <Route path="*">
            <Error404 />
        </Route> */}
      </Switch>
    </Router>
  );
}

export default App;
