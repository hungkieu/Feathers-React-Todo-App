import React, { useState } from 'react';

import { Link } from 'react-router-dom';

import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const useStyle = makeStyles(theme => {
  return {
    main: {
      display: 'flex',
      flexDirection: 'column',
      minWidth: '320px'
    },
    margin: {
      marginBottom: theme.spacing(2)
    }
  };
});

const ConfirmPassword = ({ signup, ...props }) => {
  if (!signup) {
    return <></>;
  }

  return <TextField {...props}></TextField>;
};

const AuthForm = ({ type, onSubmit }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const classes = useStyle();

  const handleChangeEmail = event => {
    setEmail(event.target.value);
  };

  const handleChangePassword = event => {
    setPassword(event.target.value);
  };

  const handleSubmit = () => {
    const data = {
      email,
      password
    };
    onSubmit(data);
  };

  return (
    <div className={classes.main}>
      <TextField
        className={classes.margin}
        label="Email"
        variant="outlined"
        required
        onChange={handleChangeEmail}
      ></TextField>
      <TextField
        className={classes.margin}
        label="Mật khẩu"
        variant="outlined"
        type="password"
        required
        onChange={handleChangePassword}
      ></TextField>
      <ConfirmPassword
        signup={type === 'signup'}
        className={classes.margin}
        label="Xác nhận mật khẩu"
        variant="outlined"
        type="password"
        required
      />
      <Button
        variant="contained"
        color="primary"
        className={classes.margin}
        onClick={handleSubmit}
      >
        {type === 'signin' ? 'Đăng Nhập' : 'Đăng Ký'}
      </Button>
      <Link to={type === 'signup' ? '/signin' : '/signup'}>
        <Typography variant="body1">
          {type === 'signup' ? 'Đăng Nhập' : 'Đăng Ký'}
        </Typography>
      </Link>
    </div>
  );
};

export default AuthForm;
