import React, { Component } from 'react';
import TodoForm from '../components/TodoForm';
import TodoList from '../components/TodoList';

class TodoLayout extends Component {
  state = {
    item: '',
    editItem: -1,
    editItemValue: '',
    items: []
  };

  onChange = (event) => {
		event.preventDefault();
    this.setState({
			item: event.target.value
		});
	};

  onSubmit = (event) => {
    event.preventDefault();
    const {item, items} = this.state;
    if (!item) {
      return;
    }
		this.setState({
      item: '',
			items: [...items, item]
		});
	};

  onEdit = (event, index) => {
		event.preventDefault();
		this.setState({
      editItem: index,
      editItemValue: this.state.items[index]
    })
	};

  onSave = (event, index) => {
		event.preventDefault();
		let { items, editItemValue } = this.state;
		items[index] = editItemValue;
		this.setState({
      editItem: -1,
      editItemValue: '',
      items: items
    })
	};

  onChangeEditable = (event) => {
    event.preventDefault();
    this.setState({
			editItemValue: event.target.value
		});
  };

  onRemove = (event, index) => {
		this.setState({
      items: [
        ...this.state.items.slice(0, index),
        ...this.state.items.slice(index + 1)
      ]
    });
	};

  render() {
		const { item, items, editItem, editItemValue } = this.state;

		return (
			<div className="todo-list">
        <TodoForm
          item={item}
          onChange={this.onChange}
          onSubmit={this.onSubmit}
        />
        <TodoList
          items={items}
          editItem={editItem}
          editItemValue={editItemValue}
          onEdit={this.onEdit}
          onRemove={this.onRemove}
          onSave={this.onSave}
          onChangeEditable={this.onChangeEditable}
        />
			</div>
		);
	}
}

export default TodoLayout;
