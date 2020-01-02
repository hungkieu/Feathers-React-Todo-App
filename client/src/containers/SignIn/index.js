import React from 'react';
import { useHistory } from 'react-router-dom';
import feathers from '../../feathers';

import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

import AuthForm from '../../components/AuthForm';
import CenterWrapper from '../../components/CenterWrapper';

const useStyle = makeStyles(theme => {
  return {
    title: {
      marginTop: theme.spacing(4),
      marginBottom: theme.spacing(4)
    }
  };
});

const SignIn = ({ setCurrentUser }) => {
  const classes = useStyle();
  const history = useHistory();

  const handleSubmitForm = async data => {
    try {
      const response = await feathers.authenticate({
        strategy: 'local',
        ...data
      });
      signInSuccess(response);
    } catch {
      alert('Sign In Failed!');
      setCurrentUser(undefined);
    }
  };

  const signInSuccess = ({ user }) => {
    setCurrentUser(user);
    history.push('/');
  };

  return (
    <CenterWrapper>
      <Typography variant="h2" component="h1" className={classes.title}>
        Đăng Nhập
      </Typography>
      <AuthForm type="signin" onSubmit={handleSubmitForm}></AuthForm>
    </CenterWrapper>
  );
};

export default SignIn;
