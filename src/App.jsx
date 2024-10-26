import { useReducer, useState } from "react";
import "./App.css";
import { MovieContext, ThemeContext } from "./context";
import Page from "./components/Page";
import { CartReducer, initialState } from "./reducers/CartReducer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  // const [cartData, setCartData] = useState([]);
  const [state, dispatch] = useReducer(CartReducer, initialState);
  const [darkMode, setDarkMode] = useState(true);
  return (
    <>
      <ThemeContext.Provider value={{ darkMode, setDarkMode }}>
        <MovieContext.Provider value={{ state, dispatch }}>
          <Page />
          <ToastContainer />
        </MovieContext.Provider>
      </ThemeContext.Provider>
    </>
  );
}

export default App;
