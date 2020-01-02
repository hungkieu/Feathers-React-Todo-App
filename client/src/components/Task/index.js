import React from 'react';
import moment from 'moment';

import { makeStyles } from '@material-ui/core/styles';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
  text: {
    textDecoration: props => {
      return props.status === 'finished' ? 'line-through' : 'none';
    }
  }
}));

const formatDate = date => moment(date).format('DD/MM/YYYY hh:mm');

const Task = ({ _id, text, status, updatedAt, onClick }) => {
  const classes = useStyles({ status });

  const handleClick = () => {
    onClick(_id);
  };

  return (
    <ListItem button onClick={handleClick}>
      <ListItemIcon>
        <Checkbox
          checked={status === 'finished'}
          disableRipple
          inputProps={{ 'aria-labelledby': _id }}
        />
      </ListItemIcon>
      <ListItemText id={_id} primary={text} className={classes.text} />
      <ListItemSecondaryAction>
        <Typography variant="body1" color="textSecondary">
          {formatDate(updatedAt)}
        </Typography>
      </ListItemSecondaryAction>
    </ListItem>
  );
};

export default Task;
