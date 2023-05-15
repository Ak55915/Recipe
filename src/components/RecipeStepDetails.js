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
//import { useNavigate } from "react-router";
import { useParams } from 'react-router';

function RecipeStepDetails() {
    const [recipesSteps, setRecipeSteps] = useState([]);
    const params = useParams();

    useEffect(() => {
        fetchRecipesSteps();
    }, []);
  
    const fetchRecipesSteps = () => {
      axios
        .get(`http://localhost:8080/indexSteps/getRecipe/${params.id}`)
        .then((response) => {
            setRecipeSteps(response.data);
        });
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
        <h1> Steps Of Recipe</h1>
        <hr />
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 700 }} aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell align="center">Step No.</StyledTableCell>
                <StyledTableCell align="center">Description</StyledTableCell>
                <StyledTableCell align="center">Image</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {recipesSteps.map((step, index) => (
                <StyledTableRow key={step.stepId}>
                  <StyledTableCell component="th" scope="row">
                    {index + 1}
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    {step.stepDescription}
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    {step.stepImage}
                  </StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>

    </>
  )
}

export default RecipeStepDetails