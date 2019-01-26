import React from 'react';

export class NameForm extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
        value: '',
        items: []
     };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  componentDidMount() {
    let items = JSON.parse(localStorage.getItem("toDoItems"));
    if(items !== null){
      this.setState({items: items});
    }
  }

  handleSubmit(event) {
    event.preventDefault();

    if(this.state.value.length === 0){
      alert("Please enter to do item title");
      return;
    }

    this.state.items.push({title: this.state.value, id: Math.random()});
    localStorage.setItem("toDoItems", JSON.stringify(this.state.items));
    this.setState({items: this.state.items});
    this.setState({value: ''});
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            Add new item:
            <input type="text" value={this.state.value} onChange={this.handleChange} />
          </label>
          <input type="submit" value="Submit" />
        </form>
        <div>
          {this.state.items.map(item => 
            <ul id="myUL" key={item.id}>
              <li>
                {item.title}
                <span className="close">×</span>
              </li>
            </ul>
          )}
        </div>
      </div>
    );
  }
}