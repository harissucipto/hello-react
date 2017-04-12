var Greater = React.createClass({
  getDefaultProps: function() { // deklarasikan default props jika tidak ada passsing data maka pakai ini nilai defaultnya
    return {
      name: 'React',
      message: 'This is from a component'
    };
  },
  getInitialState: function() {
    return {
      name: this.props.name
    };
  },
  onButtonClick: function(e) {
    e.preventDefault();   /* mencegah browser mereload semua jika form di submit */

    var nameRef = this.refs.name;

    var name = nameRef.value;
    nameRef.value = ''; // kosongkan kolom setelah diisi

    if (typeof name === 'string' && name.length > 0) {
      // ubah data setState
      this.setState({
        name: name
      });
    }

  },
  render: function() {
    // ambil data dari props
    var name = this.state.name;
    var message = this.props.message;

    // apa yang akan dirender
    return (
      <div>
        <h1>Hello {name}!</h1>
        <p>{message + '!!!'}</p>

        <form onSubmit={this.onButtonClick}>
          <input type="text" ref="name" />
          <button>Set Name</button>
        </form>
      </div>
    );
  }
});

var firstName = 'Haris';


ReactDOM.render(
  <Greater name={firstName} />, // passing data to props and render
  document.getElementById('app') // location to render
);
