import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SocialMedia from "./pages/SocialMedia";

const AppRouter = () => {
  return (
    <Router>
      <Switch>
        <Route path="/social/:platform" element={<SocialMedia />} />
      </Switch>
    </Router>
  );
};

export default AppRouter;
