import React, { useEffect } from "react";
import "./App.css";
import Header from "./Header";
import Checkout from "./Checkout";
import Hamburger from "./Hamburger";
import Footer from "./Footer";
import Register from "./Register";
import Payment from "./Payment";
import Login from "./Login";
import Orders from "./Orders";
import Home from "./Home";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { auth } from "./firebase";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import { useStateValue } from "./StateProvider";

const promise = loadStripe(
  "pk_test_51HQR3vCkGlg3oeguQ6dIkzuCAZfmCM5awjRRJA6mTfRNKouoqgKTPkcYOVyy0pzDIVVpXrpgL0GKMmJYCz3Lp5PX00RJcpo5Go"
);

function App() {
  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    // will only run once when the app component loads...

    auth.onAuthStateChanged((authUser) => {
      // console.log("THE USER IS >>> ", authUser);
      if (authUser) {
        // the user just logged in / the user was logged in
        dispatch({
          type: "SET_USER",
          user: authUser,
          displayName: authUser.displayName,
        });
      } else {
        // the user is logged out
        dispatch({
          type: "SET_USER",
          user: null,
          displayName: null,
        });
      }
    });
  }, []);

  return (
    <BrowserRouter>
      <div className='app'>
        <Switch>
          <Route path='/checkout'>
            <Header />
            <Checkout />
            {/* Home */}
          </Route>
          <Route path='/login'>
            <Login />
          </Route>
          <Route path='/register'>
            <Register />
          </Route>
          <Route path='/ham'>
            <Header />
            <Hamburger />
          </Route>
          <Route path='/payment'>
            <Header />
            <Elements stripe={promise}>
              <Payment />
            </Elements>
            <Footer />
          </Route>
          <Route path='/orders'>
            <Header />
            {/* Home */}
            <Orders />
            <Footer />
          </Route>
          <Route path='/'>
            <Header />
            {/* Home */}
            <Home />
            <Footer />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
