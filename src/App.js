import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import React from "react";
import Cart from "./components/Cart";

class App extends React.Component {
  render() {
    return (
      <>
        <Router>
          <div>
            <Switch>
              <Route exact path="/cart" component={Cart} />

              <Route exact path="*" component={Cart} />
            </Switch>
          </div>
        </Router>
      </>
    );
  }
}
export default App;
