import React, { useEffect, useState } from "react";
import axios from "axios";
import { Button } from "@mui/material";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
 // import { useNavigate } from "react-router";

function ListOfRecipes() {
  const [allRecipes, setAllRecipes] = useState([]);
  // const navigate = useNavigate();

  useEffect(() => {
    getAllRecipes();
  }, []);

  const getAllRecipes = () => {
    axios
      .get("http://localhost:8080/recipe/fetchAllRecipes")
      .then((response) => {
        setAllRecipes(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const deleteRecipe = (id) => {
    console.log(id)
    const url = `http://localhost:8080/recipe/deleteRecipe/${id}`;
    axios
      .delete(url)
      .then((response) => {
        getAllRecipes();
      })
      .catch(() => {
        console.log("error");
      });
  };
  const updateRecipe = (id) => {
    //navigate(`/auditorium-update/${id}`);
  };

  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));

  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    "&:last-child td, &:last-child th": {
      border: 0,
    },
  }));
  return (
    <>
      <div className="user">
        <h1> List Of Recipes </h1>
        <hr />
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 700 }} aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell>Recipe ID</StyledTableCell>
                <StyledTableCell align="center">Recipe Name</StyledTableCell>
                <StyledTableCell align="center">Required Time</StyledTableCell>
                <StyledTableCell align="center">Rating</StyledTableCell>
                <StyledTableCell align="center">Actions</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {allRecipes.map((recipe, index) => (
                <StyledTableRow key={recipe.recipeId}>
                  <StyledTableCell component="th" scope="row">
                    {index + 1}
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    {recipe.recipeName}
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    {recipe.timeRequiredToPrepare}
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    {recipe.ratingForDifficultyAndQuality}
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    <Button
                      className="m-2"
                      color="secondary"
                      variant="outlined"
                      onClick={() => {
                        updateRecipe(recipe.recipeId);
                      }}
                    >
                      Update
                    </Button>
                    <Button
                      className="m-2"
                      color="error"
                      variant="outlined"
                      onClick={() => {
                        deleteRecipe(recipe.recipeId);
                      }}
                    >
                      Delete
                    </Button>
                  </StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </>
  );
}

export default ListOfRecipes;
