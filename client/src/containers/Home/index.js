import React, { useState, useEffect } from 'react';
import feathers from '../../feathers';

import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

import Tasks from '../../components/Tasks';
import AddTaskDialog from '../../components/AddTaskDialog';

const useStyles = makeStyles(theme => ({
  main: {
    width: '100%',
    height: '100%',
    backgroundColor: theme.palette.background.paper
  },
  container: {
    margin: 'auto',
    width: '80%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column'
  },
  bottom: {
    width: '100%',
    height: '64px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  }
}));

const getTask = (id, tasks) => tasks.find(task => id === task._id);

const Home = ({ user }) => {
  const [addTaskDialogVisible, setAddTaskDialogVisible] = useState(false);
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState(undefined);
  const classes = useStyles();

  useEffect(() => {
    const loadTasks = async () => {
      const response = await feathers.service('tasks').find({
        user: user._id,
        query: {
          $sort: { status: -1, updatedAt: -1 }
        }
      });

      setTasks(response.data);
    };

    loadTasks();
  }, [task, user._id]);

  const openAddTaskDialog = () => {
    setAddTaskDialogVisible(true);
  };

  const closeAddTaskDialog = () => {
    setAddTaskDialogVisible(false);
  };

  const addTask = async data => {
    const response = await feathers
      .service('tasks')
      .create({ user: user._id, ...data });
    setTask(response);
  };

  const changeStatusTask = async id => {
    const task = getTask(id, tasks);
    const status = task.status === 'finished' ? 'unfinished' : 'finished';
    const response = await feathers
      .service('tasks')
      .patch(id, { status });
    setTask(response);
  };

  return (
    <div className={classes.main}>
      <div className={classes.container}>
        <Tasks tasks={tasks} changeStatusTask={changeStatusTask} />
        <div className={classes.bottom}>
          <Button onClick={openAddTaskDialog}>Thêm công việc mới</Button>
        </div>
        <AddTaskDialog
          open={addTaskDialogVisible}
          onClose={closeAddTaskDialog}
          onSubmit={addTask}
        />
      </div>
    </div>
  );
};

export default Home;
