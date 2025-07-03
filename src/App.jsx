import "./App.css";
import Navbar from "./components/Navbar";
import React from "react";
import Card from "./components/Card"
import Jumbotron from "./components/Jumbotron";
import Footer from "./components/Footer";


export const App = () => {
  return (
    <>
      <Navbar />
      <Jumbotron />
      <div className="listCard">
        <Card /><Card /><Card /><Card />
      </div>
      <Footer />
    </>
  );
};import React from 'react';
import { Container, Grid } from '@mui/material';
import Navbar from './Navbar';
import Jumbotron from './Jumbotron';
import Card from './Card';
import Footer from './Footer';

const App = () => {
  return (
    <>
      <Navbar />
      <Jumbotron />

      <Container sx={{ my: 4 }}>
        <Grid container spacing={4}>
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <Card />
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <Card />
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <Card />
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <Card />
          </Grid>
        </Grid>
      </Container>

      <Footer />
    </>
  );
};

export default App;

