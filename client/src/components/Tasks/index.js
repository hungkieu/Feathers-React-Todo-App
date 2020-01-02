import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';

import Task from '../Task';

const useStyles = makeStyles(theme => ({
  main: {
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: theme.palette.background.paper,
    overflow: 'auto',
  },
  empty: {
    marginTop: theme.spacing(2),
    alignSelf: 'center'
  }
}));

const TaskNodes = ({ tasks, changeStatusTask }) => {
  if (tasks.length === 0) {
    return <Typography>Chưa có công việc nào ...</Typography>;
  }

  return tasks.map((task, index) => {
    return <Task {...task} onClick={changeStatusTask} key={index} />;
  });
};

const Tasks = ({ tasks, changeStatusTask }) => {
  const classes = useStyles();

  return (
    <List className={classes.main}>
      {tasks.length === 0 ? (
        <Typography className={classes.empty}>
          Chưa có công việc nào ...
        </Typography>
      ) : (
        <TaskNodes tasks={tasks} changeStatusTask={changeStatusTask} />
      )}
    </List>
  );
};

export default Tasks;
