const React = require('react')
class Show extends React.Component {
    render() {
        const poke = this.props.onePokemon
        return (
            <div>
                <h1>Gotta Catch 'Em All</h1>
                <h2>
                    {poke.name.charAt(0).toUpperCase() + poke.name.slice(1)}
                </h2>
                <img src={poke.img} alt={poke.name} />
                <br></br>
                <a href="/pokemon">All Pokemon List</a>
            </div>
        );
    }
}
module.exports = Show;