import React from 'react';
import PropTypes from 'prop-types';
import TodoItem from './TodoItem';

const TodoList = ({items, editItem, editItemValue, onEdit, onRemove, onSave, onChangeEditable}) => {
  return (
    <div className="todo-list">
      {
        items.map((item, index) =>
          <TodoItem
            key={index}
            item={editItem === index ? editItemValue : item}
            index={index}
            editable={editItem === index}
            onEdit={onEdit}
            onRemove={onRemove}
            onSave={onSave}
            onChangeEditable={onChangeEditable}
          />
        )
      }
    </div>
  );
};

TodoList.propTypes = {
  items: PropTypes.array.isRequired,
  editItem: PropTypes.number,
  editItemValue: PropTypes.string,
  onEdit: PropTypes.func.isRequired,
  onRemove: PropTypes.func.isRequired,
  onSave: PropTypes.func.isRequired,
  onChangeEditable: PropTypes.func.isRequired
};

export default TodoList;
