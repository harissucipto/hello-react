var React = require('react');
var ReactDOM = require('react-dom');

var GreaterMessage = React.createClass({
    render: function() {
      var name = this.props.name;
      var message = this.props.message;

      return (
        <div>
          <h1>Hello {name}!</h1>
          <p>{message}!!</p>
        </div>
      );
    }
});

var GreaterForm = React.createClass({
    onFormSubmit: function(e) {
      e.preventDefault();


      var updates = {};
      var name = this.refs.name.value;
      var message = this.refs.message.value;


      if (name.length > 0) {
        this.refs.name.value = '';
        updates.name = name;
      }

      if (message.length > 0) {
        this.refs.message.value = '';
        updates.message = message;
      }

      this.props.onNewData(updates);

    },
    render: function() {
      return (
          <div>
            <form onSubmit={this.onFormSubmit}>
              <div>
                <input type="text" ref="name" placeholder="Enter name"/>
              </div>
              <div>
                <textarea  ref="message" placeholder="Enter Message"/>
              </div>
              <div>
                <button>Submit</button>
              </div>
            </form>
          </div>
      );
    }
});


var Greater = React.createClass({
  getDefaultProps: function() { // deklarasikan default props jika tidak ada passsing data maka pakai ini nilai defaultnya
    return {
      name: 'React',
      message: 'This is from a component'
    };
  },
  getInitialState: function() {
    return {
      name: this.props.name,
      message: this.props.message
    };
  },
  handleNewData: function(updates) {
    this.setState(updates);
  },
  render: function() {
    // ambil data dari state
    var name = this.state.name;
    var message = this.state.message;

    // apa yang akan dirender
    return (
      <div>
        <GreaterMessage name={name} message={message}/>
        <GreaterForm onNewData={this.handleNewData}/>
      </div>
    );
  }
});

var firstName = 'Haris';


ReactDOM.render(
  <Greater name={firstName} />, // passing data to props and render
  document.getElementById('app') // location to render
);
