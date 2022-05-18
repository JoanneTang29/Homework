const React = require('react');

const myStyle = {
    color: '#ffffff',
    backgroundColor: '#e76f51',
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
                            <a href={`/pokemon/${i}`}>{capitalize(pokemon.name)}</a>
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