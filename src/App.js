import React, { useEffect, useState } from 'react'
import {Container, Grow, Grid} from '@material-ui/core';
import Form from './components/Form/Form';
import Posts from './components/Posts/Posts';
import useStyles from "./styles";
import { useDispatch } from "react-redux";
import { getPosts } from "./actions/posts"
import Navbar from './components/Navbar/Navbar';

function App() {
  const [currentId, setCurrentId] = useState(null);
  const classes = useStyles();
  const dispatch = useDispatch();

  useEffect(() => {

    dispatch(getPosts());

  }, [dispatch]);
  
  return (
    <Container maxwidth="lg">
      <Navbar />
      <Grow in>
        <Container>
          <Grid className={classes.mainContainer} container justifyContent='space-between' alignItems='stretch' spacing={3}>
            <Grid item xs={12} sm={7}>
              <Posts setCurrentId={setCurrentId}/>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Form currentId={currentId} setCurrentId={setCurrentId} />
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </Container>
  )
}

export default App