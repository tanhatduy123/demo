import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    padding: theme.spacing(10, 0),
  },
  main: {
    backgroundColor: theme.palette.background.paper,
    margin: theme.spacing(1, 2),
  },
  section1: {
    padding: theme.spacing(2, 2),
  },
  paper: {

  },
  list1: {
    backgroundColor: theme.palette.background.paper,

  },
}));

export default function App() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.main}>
        <div className={classes.section1}>
          <Grid container alignItems="center">
            <Grid item xs>
              <Typography gutterBottom variant="h6">
                Giới thiệu (version 2)
              </Typography>
            </Grid>
          </Grid>
        </div>
        <Divider />
        <div className={classes.section1}>
          <Grid container alignItems="center">
            <Grid container spacing={3}>
              <Grid item  sm={3} xs={12}>
                <Paper className={classes.paper}>
                  <List component="nav" className={classes.list1} aria-label="mailbox folders">
                    <ListItem button>
                      <ListItemText primary="Tổng quan" />
                    </ListItem>
                    <Divider />
                    <ListItem button divider>
                      <ListItemText primary="Công việc và học vấn" />
                    </ListItem>
                    <ListItem button>
                      <ListItemText primary="Nơi từng sống" />
                    </ListItem>
                    <Divider />
                    <ListItem button>
                      <ListItemText primary="Thông tin liên hệ và cơ bản" />
                    </ListItem>
                    <Divider />
                    <ListItem button>
                      <ListItemText primary="Gia đình và các mối quan hệ" />
                    </ListItem>
                    <Divider />
                    <ListItem button>
                      <ListItemText primary="Chi tiết về bạn" />
                    </ListItem>
                    <Divider />
                    <ListItem button>
                      <ListItemText primary="Sự kiện trong đời" />
                    </ListItem>
                  </List>
                </Paper>
              </Grid>
              <Grid item sm={6} xs={12} >
              <Paper className={classes.paper}>
                <Grid container wrap="nowrap" spacing={2}>
                  <Grid item>
                    <Avatar>W</Avatar>
                  </Grid>
                  <Grid item xs zeroMinWidth>
                    <Typography noWrap>Làm Việc Tại Hahalolo và Làm biếng ở nhà</Typography>
                    <Typography noWrap>Quá khứ: Halotimes và Teen1s </Typography>
                  </Grid>
                </Grid>
              </Paper>
              <Paper className={classes.paper}>
                <Grid container wrap="nowrap" spacing={2}>
                  <Grid item>
                    <Avatar>W</Avatar>
                  </Grid>
                  <Grid item xs zeroMinWidth>
                    <Typography noWrap>Làm Việc Tại Hahalolo và Làm biếng ở nhà</Typography>
                    <Typography noWrap>Quá khứ: Halotimes và Teen1s </Typography>
                  </Grid>
                </Grid>
              </Paper>
              <Paper className={classes.paper}>
                <Grid container wrap="nowrap" spacing={2}>
                  <Grid item>
                    <Avatar>W</Avatar>
                  </Grid>
                  <Grid item xs zeroMinWidth>
                    <Typography noWrap>Làm Việc Tại Hahalolo và Làm biếng ở nhà</Typography>
                    <Typography noWrap>Quá khứ: Halotimes và Teen1s </Typography>
                  </Grid>
                </Grid>
              </Paper>
              </Grid>
              <Grid item sm={3} xs={12} >
                <Paper className={classes.paper}>
                  <Grid container wrap="nowrap" spacing={2}>
                    <Grid item>
                      <Avatar>W</Avatar>
                    </Grid>
                    <Grid item xs zeroMinWidth>
                      <Typography noWrap>1900 8198</Typography>
                      <Typography noWrap>25 tháng 10, 1993 </Typography>
                      <Typography noWrap>Nam</Typography>
                    </Grid>
                  </Grid>
                </Paper>
              </Grid>
            </Grid>
          </Grid>
        </div>
      </div>
    </div>
  );
}