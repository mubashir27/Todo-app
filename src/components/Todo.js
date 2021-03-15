import {
  ListItemText,
  List,
  ListItem,
  ListItemAvatar,
} from "@material-ui/core";
import React from "react";
import DeleteIcon from "@material-ui/icons/Delete";
import db from "../firebase";

function Todo({ todo }) {
  return (
    <List>
      <ListItem>
        <ListItemAvatar>
          <ListItemText primary={todo.todo} secondary="Todo"></ListItemText>
        </ListItemAvatar>
      </ListItem>
      <DeleteIcon
        onClick={(e) => db.collection("todos").doc(todo.id).delete()}
      />
    </List>
  );
}

export default Todo;
