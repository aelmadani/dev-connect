import React, { Fragment, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Navbar from "./components/layout/Navbar";
import Landing from "./components/layout/Landing";
import Routes from "./routing/Routes";

import setAuthToken from "./utils/setAuthToken";
import { loadUser } from "./actions/auth";

//Redux
import { Provider } from "react-redux";
import store from "./store";

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

const App = (props) => {
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);
  return (
    <Provider store={store}>
      <Router>
        <Fragment>
          <Navbar />
          <Route exact path="/" component={Landing} />
          <Route component={Routes} />
        </Fragment>
      </Router>
    </Provider>
  );
};

export default App;
