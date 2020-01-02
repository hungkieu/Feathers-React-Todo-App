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
    },
  };
});

const SignUp = () => {
  const classes = useStyle();
  const history = useHistory();

  const handleSubmitForm = async (data) => {
    await feathers.service('users').create(data);
    SignUpSuccess();
  }

  const SignUpSuccess = () => {
    history.push('/signin');
  }

  return <CenterWrapper>
    <Typography variant="h2" component="h1" className={classes.title}>
      Tạo tài khoản mới
    </Typography>
    <AuthForm type="signup" onSubmit={handleSubmitForm}></AuthForm>
  </CenterWrapper>
}

export default SignUp;
