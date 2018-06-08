import React from 'react';
import ReactDOM from 'react-dom';


///////////////////////////////////////////////////////////

function tick() {
  const element = (
    <div>
      <h1>Hello, world!</h1>
      <h2>It is {new Date().toLocaleTimeString()}.</h2>
    </div>
  );
  ReactDOM.render(element, document.getElementById('root'));
}

setInterval(tick, 1000);

///////////////////////////////////////////////////////////


function DisplayHeading(val)
{
    return <h3>Here you can display values of passed parameter {val.name}</h3>;
}
const element = <DisplayHeading name="Milap" />;
ReactDOM.render(element,document.getElementById('root1'));


///////////////////////////////////////////////////////////

function formatDate(date) {
  return date.toLocaleDateString();
}

function Comment(props) {
  return (
    <div className="Comment">
      <div className="UserInfo">
        <img
          className="Avatar"
          src={props.author.avatarUrl}
          alt={props.author.name}
        />
        <div className="UserInfo-name">
          {props.author.name}
        </div>
      </div>
      <div className="Comment-text">{props.text}</div>
      <div className="Comment-date">
        {formatDate(props.date)}
      </div>
    </div>
  );
}

const comment = {
  date: new Date(),
  text: 'I hope you enjoy learning React!',
  author: {
    name: 'Hello Kitty',
    avatarUrl: 'http://placekitten.com/g/64/64',
  },
};

const element2 = <Comment date={comment.date} text={comment.text} author={comment.author} />;
ReactDOM.render(element2,document.getElementById('root2'));

///////////////////////////////////////////////////////////



class NameForm extends React.Component{
    constructor(props){
        super(props);
        this.state = {value:''};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event){
        this.setState({value: event.target.value});
      //  alert('A name was submitted: ' + this.state.value);
        event.preventDefault();
    }

    handleSubmit(event){
        alert('A name was submitted: ' + this.state.value);
        event.preventDefault();
    }
  
    render(){
        return (
            <form onSubmit={this.handleSubmit}>
                <label>Name:
                <input type="text" value={this.state.value} onChange={this.handleChange} />
                </label>
                <input type="submit" value="Submit" />
                </form>
        );
    }

}

ReactDOM.render(
  <NameForm />,
  document.getElementById('root3')
);


class FlavorForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: 'coconut'};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('Your favorite flavor is: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Pick your favorite La Croix flavor:
          <select value={this.state.value} onChange={this.handleChange}>
            <option value="grapefruit">Grapefruit</option>
            <option value="lime">Lime</option>
            <option value="coconut">Coconut</option>
            <option value="mango">Mango</option>
          </select>
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

ReactDOM.render(
  <FlavorForm />,
  document.getElementById('root4')
);

