var Greater = React.createClass({
  getDefaultProps: function() { // deklarasikan default props jika tidak ada passsing data maka pakai ini nilai defaultnya
    return {
      name: 'React',
      message: 'This is from a component'
    }
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
      </div>
    );
  }
});

var firstName = 'Haris';
var inputMessage = 'Halo selamat datang';

ReactDOM.render(
  <Greater />, // passing to render
  document.getElementById('app') // location to render
);
