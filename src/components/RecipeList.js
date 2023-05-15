import React, { useState, useEffect } from "react";
import axios from "axios";
import { Button, colors } from "@mui/material";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import MyImage from "../img/tomato.webp";
import { AlignHorizontalCenter } from "@mui/icons-material";
//import { useNavigate } from "react-router";

function RecipeList() {
  const [allRecipes, setAllRecipes] = useState([]);
 // const navigate = useNavigate();

  useEffect(() => {
      fetchRecipes();
  }, []);

  const fetchRecipes = () => {
    axios
      .get("http://localhost:8080/recipe/fetchAllRecipes")
      .then((response) => {
        setAllRecipes(response.data);
      });
  };

  const getDetailedSteps=(id)=>{
    console.log(id);
   // navigate(`/recipe-steps/${id}`)

  }
  return (
    <div className="d-flex container">
      <div className="flex-wrap e-card-horizontal" >
        {allRecipes.map(recipe => {
            return (
                <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={MyImage}
          alt="green iguana"
        />
        <CardContent>
          <Typography style={{ color: "red", background: "black" }} gutterBottom variant="h5" component="div">
          {recipe.recipeName}
          </Typography>
          <Typography style={{ color: "purple", textAlign: "center" }} gutterBottom variant="h5" component="div">
          Time Required : {recipe.timeRequiredToPrepare} min
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {recipe.ingredientsDescription}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="medium" color="secondary" onClick={()=>{getDetailedSteps(recipe.recipeId); }}>
        Know Steps To Prepar
        </Button>
      </CardActions>
    </Card>
            )
        })}
      </div>
    </div>
  );
}

export default RecipeList;
