import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyle = makeStyles(theme => {
  return {
    main: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'column',
      width: '100%',
      height: '100%',
      background: theme.palette.background.paper
    }
  };
});

const CenterWrapper = ({ children, ...props }) => {
  const classes = useStyle();

  return (
    <div className={classes.main} {...props}>
      {children}
    </div>
  );
};

export default CenterWrapper;
