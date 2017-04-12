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

      var name = this.refs.name.value;

      if (name.length > 0) {
        this.refs.name.value = '';
        this.props.onNewName(name);
      }

    },
    render: function() {
      return (
          <div>
            <form onSubmit={this.onFormSubmit}>
              <input type="text" ref="name"/>
              <button>Set Name</button>
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
  handleNewName: function(name) {
    this.setState({
      name: name
    });
  },
  render: function() {
    // ambil data dari state
    var name = this.state.name;
    var message = this.state.message;

    // apa yang akan dirender
    return (
      <div>
        <GreaterMessage name={name} message={message}/>
        <GreaterForm onNewName={this.handleNewName}/>
      </div>
    );
  }
});

var firstName = 'Haris';


ReactDOM.render(
  <Greater name={firstName} />, // passing data to props and render
  document.getElementById('app') // location to render
);
