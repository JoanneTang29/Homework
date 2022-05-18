const React = require('react');

const myStyle = {
    color: '#ffffff',
    backgroundColor: '#e63946',
  };

const linkStyle = {
    fontSize: '15pt'
};
class Show extends React.Component{
   render(){
    const pokemon = this.props.pokemon;
    let image = pokemon.img;
    let jpg = '.jpg';
    image = image.concat(jpg);
    return(
        <div style={myStyle}>
            <h1>Gotta Catch 'Em All</h1>
            <h2>{capitalize(pokemon.name)}</h2>
            <img src={image}></img>
            <br></br>
            <a href="../pokemon" style={linkStyle}>BACK</a>
        </div>
    )
    }
};

function capitalize(str){
    return str.charAt(0).toUpperCase() + str.slice(1);
}

module.exports = Show;