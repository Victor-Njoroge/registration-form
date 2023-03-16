import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import {  authRoutes } from "./routes/routes";
import Authlayout from "./layout/Authlayout";

// Multi-layout function
const AppRoute = ({ component: Component, layout: Layout, ...rest }) => (
  <Route
    {...rest}
    render={(props) => (
      <Layout>
        <Component {...props}></Component>
      </Layout>
    )}
    exact
  ></Route>
);
function App() {
  return (
    <Router>
      <Switch>
        {authRoutes.map((route, idx) => (
          <AppRoute
            key={idx}
            path={route.path}
            component={route.component}
            layout={Authlayout}
          />
        ))}
        <Redirect strict from="/" to="/auth/signin" />
      </Switch>
    </Router>
  );
}

export default App;