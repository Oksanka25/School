const React = require('react')
class Show extends React.Component {
    render() {
        const poke = this.props.onePokemon
        return (
            <div>
                <h1>
                    {poke.name.charAt(0).toUpperCase() + poke.name.slice(1)}
                </h1>
                <img src={poke.img} alt={poke.name} />
                <br></br>
                <a href="/pokemon">All Pokemon</a>
            </div>
        );
    }
}
module.exports = Show;