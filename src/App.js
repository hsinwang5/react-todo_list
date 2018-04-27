import React, { Component } from 'react';
import './App.css';

const DisplayList = props => {
  const list = props.items.map((item, index) => {
    return <li key={index}>{item}</li>
  })
  return (
    <ol>
      {list}
    </ol>
  );
};

class InputForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newTodo: "",
      itemList: []
    };
    
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  
  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }
  
  handleSubmit(e) {
    e.preventDefault();
    // let itemList = this.state.itemList.slice();
    // itemList.push(this.state.newTodo);
    let itemList = [...this.state.itemList, this.state.newTodo];
    this.setState({newTodo: "", itemList});
    setTimeout(() => {console.log(this.state)}, 1000);
  }
  
  render() {
    return (
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            value={this.state.newTodo}
            placeholder="What needs to be done?"
            name="newTodo"
            onChange={this.handleChange}
          />
          <input 
            type="submit"
            value="Save"
          />
          <DisplayList 
            items={this.state.itemList}
          />
        </form>
    );
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Simple Todo App</h1>
        <InputForm />
      </div>
    );
  }
}

export default App;
