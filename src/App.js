import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Header from './component/Header';
import VerticalTabs from './component/listItem'
import AutoGridNoWrap from './component/midIntroduction'
import AutoGridNoWrap1 from './component/rightIntroduction'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));
export default function App() {
  const classes = useStyles();
  return (

    <div className="row">
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Header title="Giới thiệu (version 2)"/>
        </Grid>
        <Grid item sm={3}>
          <Paper className={classes.paper}>
            <VerticalTabs />
          </Paper>
        </Grid>
        <Grid item sm={6}>
          <AutoGridNoWrap/>
        </Grid>
        <Grid item sm={3}>
          <AutoGridNoWrap1/>
        </Grid>
      </Grid>
    </div>
  )
}
