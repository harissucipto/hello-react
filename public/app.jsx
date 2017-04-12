var Greater = React.createClass({
  getDefaultProps: function() { // deklarasikan default props jika tidak ada passsing data maka pakai ini nilai defaultnya
    return {
      name: 'React',
      message: 'This is from a component'
    }
  },
  onButtonClick: function(e) {
    e.preventDefault();   /* mencegah browser mereload semua jika form di submit */

    var name = this.refs.name.value;    // akses ke attribut refs

    alert(name);
  },
  render: function() {
    // ambil data dari props
    var name = this.props.name;
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
