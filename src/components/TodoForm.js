import React from 'react';
import PropTypes from 'prop-types';

const TodoForm = ({item, onChange, onSubmit}) => {
  return (
    <div className="todo-form">
      <form onSubmit={onSubmit}>
        <input type="text" value={item} onChange={onChange} placeholder="Todo here" />
        <button>Add</button>
      </form>
    </div>
  );
};

TodoForm.propTypes = {
  item: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired
};

export default TodoForm;
