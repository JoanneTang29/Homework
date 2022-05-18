const React = require('react');

const myStyle = {
    color: '#ffffff',
    backgroundColor: '#000000',
  };
class Index extends React.Component{
   render(){
    const {pokemon} = this.props;
    return(
        <div style={myStyle}>
            <h1>See All The Pokemon!</h1>
            <ul>
                {pokemon.map((pokemon, i) => {
                    return(
                        <li>
                            <text>{capitalize(pokemon.name)}</text>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
    }
};

function capitalize(str){
    return str.charAt(0).toUpperCase() + str.slice(1);
}

module.exports = Index;