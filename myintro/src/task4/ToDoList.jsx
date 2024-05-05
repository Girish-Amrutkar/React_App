import React, { Component } from 'react';
import axios from 'axios';
import './todolist.css';

export default class ToDoList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      task: [],
      newTask: '',
      showAllTasks: false,
      editableIndex: -1
    };
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  onSubmit = (event) => {
    event.preventDefault();
    const { newTask } = this.state;
    if (newTask.trim() !== '') {
      this.setState(prevState => ({
        task: [...prevState.task, { title: newTask, editable: false }], 
        newTask: ''
      }));
    }
  };

  onDelete = (index) => {
    this.setState(prevState => ({
      task: prevState.task.filter((_, i) => i !== index)
    }));
  };

  toggleAllTasks = () => {
    this.setState(prevState => ({
      showAllTasks: !prevState.showAllTasks
    }));
  };

  toggleEdit = (index) => {
    this.setState(prevState => ({
      task: prevState.task.map((item, i) => {
        if (i === index) {
          return { ...item, editable: !item.editable }; 
        }
        return item;
      }),
      editableIndex: prevState.editableIndex === index ? -1 : index
    }));
  };
  

  // onSave = (index, updatedTask) => {
  //   this.setState(prevState => ({
  //     task: prevState.task.map((item, i) => {
  //       if (i === index) {
  //         return { ...item, title: updatedTask, editable: false }; 
  //       }
  //       return item;
  //     }),
  //     editableIndex: -1 
  //   }));
  // };

  onSave = async (index, updatedTask) => {
    try {
      const response = await axios.put(`https://jsonplaceholder.typicode.com/posts/${updatedTask.id}`, updatedTask);
      console.log('Task updated:', response.data);
      this.setState(prevState => ({
        task: prevState.task.map((item, i) => (
          i === index ? { ...item, title: updatedTask.title, editable: false } : item
        )),
        editableIndex: -1
      }));
    } catch (error) {
      console.error('Error updating task:', error);
      alert('Failed to update task. Please try again.');
    }
  };
  
  render() {
    const { newTask, task, showAllTasks, editableIndex } = this.state;
    const tasksToDisplay = showAllTasks ? task : task.slice(0, 1);
    return (
      <>
        <div className='main'> Todo-list
          <form action="" onSubmit={this.onSubmit}>
            <div className="input">
              <input onChange={this.handleChange} type="text" value={newTask} name="newTask" />
              <button className='button'>+</button>
            </div>
          </form>
          <button onClick={this.toggleAllTasks}>View</button>
          <table>
            <tbody>
              {tasksToDisplay.map((item, index) => (
                <tr key={index}>
                  <td>
                    {item.editable ? (
                      <input
                        type="text"
                        value={item.title}
                        onChange={(e) => this.onSave(index, e.target.value)}
                      />
                    ) : (
                      item.title
                    )}
                  </td>
                  <td>
                    {editableIndex === index ? (
                      <button onClick={() => this.onSave(index, item.title)}>Save</button>
                    ) : (
                      <>
                        <button onClick={() => this.toggleEdit(index)}>
                          {item.editable ? "Cancel" : "Edit"}
                        </button>
                        <button onClick={() => this.onDelete(index)}>Delete</button>
                      </>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </>
    );
  }
}