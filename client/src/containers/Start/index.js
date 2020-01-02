import React from 'react';
import { Link } from 'react-router-dom';

import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

import CenterWrapper from '../../components/CenterWrapper';

const useStyle = makeStyles(theme => {
  return {
    title: {
      marginTop: theme.spacing(4),
      marginBottom: theme.spacing(4)
    },
    button: {
      marginBottom: theme.spacing(2)
    }
  };
});

const Start = () => {
  const classes = useStyle();

  return (
    <CenterWrapper>
      <Typography variant="h2" component="h1" className={classes.title}>
        Todo App
      </Typography>
      <Link to="/signin">
        <Button variant="contained" color="primary" className={classes.button}>
          Đăng Nhập
        </Button>
      </Link>
      <Link to="/signup">
        <Button variant="contained" className={classes.button}>
          Đăng Ký
        </Button>
      </Link>
    </CenterWrapper>
  );
};

export default Start;
