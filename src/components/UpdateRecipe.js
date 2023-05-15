import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useForm } from "react-hook-form";
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useParams } from 'react-router';
import InputAdornment from "@mui/material/InputAdornment";
const theme = createTheme();

function UpdateRecipe() {

    const { register, handleSubmit, errors } = useForm()
   // const navigate = useNavigate();
    const[recipe,setRecipe]=useState({});
    const[auditorium,setAuditorium]=useState()
    const[recipeSteps,setRecipeSteps]=useState({})
    const [message, setMessage] = useState("");

    useEffect(()=>{
        getRecipeDetails();
        getRecipeSteps();
    },[]);

    const getRecipeDetails=()=> {
        axios
        .get(`http://localhost:8080/recipe/getRecipe/${params.id}`)
        .then(response =>{ 
            setRecipe(response.data);
    }).catch((error=>{setMessage("error occered ");
            toast.error(message);
    }));
    }
    const getRecipeSteps=()=>{
        axios
        .get(`http://localhost:8080/indexSteps/getRecipe/${params.id}`)
        .then(response =>{ 
            setRecipeSteps(response.data);
    }).catch((error=>{setMessage("error occered ");
            toast.error(message);
    }));
    }

    const onSubmit = data => {
        axios.put(`http://localhost:8080/recipe/updateRecipe/${params.id}`, data, { headers: { "Content-Type": "application/json", }, })
            .then((response) => {
                // toast.success("Auditorium Updated Sucessfully");
                // navigate('/auditorium-list');
            })
            .catch((err) => {
                // toast.error("Failed to update Auditorium")
                // navigate('/auditorium-list');
            });

  return (
    <>
    {recipe!=null ?
        <div id='update-div'>
            <ThemeProvider theme={theme}>
                <Container component="main" maxWidth="xs">
                    <CssBaseline />
                    <Box id="update-card"
                        sx={{
                            marginTop: 8,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                        }}
                    >
                        <Typography component="h1" variant="h5" sx={{ color: 'secondary.main' }}>
                            Update  Auditorium Details
                        </Typography>
                        <Box component="form" noValidate onSubmit={handleSubmit(onSubmit)} sx={{ mt: 1, width: '80%' }}>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    autoComplete="given-name"
                                    name="Auditorium ID"
                                    readOnly
                                    fullWidth
                                    value={auditorium.auditoriumId}
                                    id="auditoriumId"
                                    autoFocus
                                    placeholder='Auditorium Id'
                                    {...register("auditoriumId",{required:true})}
                                    InputProps={{
                                        startAdornment: (
                                          <InputAdornment position="start">
                                            
                                          </InputAdornment>
                                        ),
                                      }}
                                />
                            </Grid><br />
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    autoComplete="given-name"
                                    name="auditoriumName"
                                    required
                                    fullWidth
                                    defaultValue={auditorium.auditoriumName}
                                    id="auditoriumName"
                                    placeholder='Auditorium name'
                                    autoFocus
                                    {...register("auditoriumName",{required:true})}
                                    InputProps={{
                                        startAdornment: (
                                          <InputAdornment position="start">
                                            
                                          </InputAdornment>
                                        ),
                                      }}
                                />
                            </Grid>
                            <br />
                            <Grid item xm={12} sm={6}>
                                <TextField
                                    required
                                    fullWidth
                                    id="auditoriumLocation"
                                    placeholder='Location'
                                    name="auditoriumLocation"
                                    defaultValue={auditorium.auditoriumLocation}
                                    autoComplete="family-name"
                                    {...register("auditoriumLocation",{required:true})}
                                    InputProps={{
                                        startAdornment: (
                                          <InputAdornment position="start">
                                           {/* icons */}
                                          </InputAdornment>
                                        ),
                                      }}
                                />

                            </Grid>
                            <br />
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    required
                                    fullWidth
                                    type="number"
                                    id="auditoriumCapacity"
                                    placeholder='Capacity'
                                    defaultValue={auditorium.auditoriumCapacity}
                                    name="auditoriumCapacity"
                                    autoComplete="family-name"
                                    {...register("auditoriumCapacity",{required:true})}
                                    InputProps={{
                                        startAdornment: (
                                          <InputAdornment position="start">
                                            
                                          </InputAdornment>
                                        ),
                                      }}
                                /> </Grid>
                            <br />
                            <Button
                                id="update-button"
                                type="submit"
                                fullWidth
                                variant="contained"
                                color='success'
                                sx={{ mt: 3, mb: 2, color: 'black' }}
                            >
                                Update Auditorium
                            </Button>
                        </Box>
                    </Box>
                </Container>
            </ThemeProvider></div>:null}
    </>
  )
}
}

export default UpdateRecipe;