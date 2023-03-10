import "./App.css";
import { Home } from "./pages/Home";
import { Route, Routes } from "react-router-dom";
//import { CharacterInfo } from "./pages/CharacterInfo";
//import { useSelector } from "react-redux";

export const App = () => {
  // const idValue = useSelector((state) => state.id.value);
  return (
    //<Routes>
    //  <Route path="/" element={<Home />}></Route>
    //  <Route path="character/:id" element={<CharacterInfo id={1} />}></Route>
    //</Routes>
    <Home />
  );
};

export default App;
