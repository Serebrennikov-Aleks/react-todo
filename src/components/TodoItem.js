import React from 'react';
import PropTypes from 'prop-types';

const TodoItem = ({item, index, editable, onEdit, onRemove, onSave, onChangeEditable}) => {
  return (
    <div className="todo-itemm">
      <input type="text" value={item} disabled={!editable} onChange={(e) => onChangeEditable(e)} />
      {!editable ?
        <button onClick={(e) => onEdit(e, index)}>Edit</button>
        :
        <button onClick={(e) => onSave(e, index)}>Save</button>
      }
      <button onClick={(e) => onRemove(e, index)}>Remove</button>
    </div>
  );
};

TodoItem.propTypes = {
  item: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
  editable: PropTypes.bool,
  onEdit: PropTypes.func.isRequired,
  onRemove: PropTypes.func.isRequired,
  onSave: PropTypes.func.isRequired,
  onChangeEditable: PropTypes.func.isRequired
};

export default TodoItem;
