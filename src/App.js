import logo from "./logo.svg";
import "./App.css";
import RecipeList from "./components/RecipeList";
import ListOfRecipes from "./components/ListOfRecipes";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { Grid } from "@mui/material";
import Navigation from "./components/Navigation";
import RecipeStepDetails from "./components/RecipeStepDetails";

function App() {
  return (
    <div className="App">
      <RecipeList />
      <ListOfRecipes />
      <BrowserRouter>
        {/*  Render navigation bar here*/}
        <Navigation/>

        <Grid container>
          <Grid item xs={3}></Grid>
          <Grid item xs={9}>
            <Routes>
              <Route path="/" element={<RecipeList />} />
              <Route path="/list-recipes" element={<ListOfRecipes />} />
              <Route path="/recipe-steps/:id" element={<RecipeStepDetails/>} />
            </Routes>
          </Grid>
        </Grid>
      </BrowserRouter>
      <ToastContainer theme="colored" />
      
    </div>
  );
}

export default App;
