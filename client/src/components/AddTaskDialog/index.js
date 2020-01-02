import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';

const AddTaskDialog = ({ open, onClose, onSubmit }) => {
  const [text, setText] = useState('');

  const handleChangeText = (event) => {
    setText(event.target.value);
  }

  const handleSubmit = () => {
    const data = { text };
    onSubmit(data);
    onClose();
    setText('');
  }

  return (
    <div>
      <Dialog open={open} onClose={onClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Thêm mới công việc</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            label="Nội dung"
            variant="outlined"
            fullWidth
            multiline
            rows={3}
            onChange={handleChangeText}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={onClose} color="primary">
            Hủy
          </Button>
          <Button onClick={handleSubmit} color="primary">
            Thêm
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default AddTaskDialog;
