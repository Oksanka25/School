const React = require('react')
class Show extends React.Component {
    render() {
        const poke = this.props.onePokemon;
        // { console.log(this.props) }
        const { allPokemon } = this.props;
        const id = allPokemon.findIndex((el) => {
            return el.name == poke.name;
        })
        return (
            <div>
                <h1>Gotta Catch 'Em All</h1>
                <h2>
                    {poke.name.charAt(0).toUpperCase() + poke.name.slice(1)}
                </h2>
                <img src={poke.img} alt={poke.name} />
                <br></br>
                <button>
                    <a href={`/pokemon/${id}/edit`}> Edit {poke.name}</a>
                </button>
                <br>
                </br>
                <form method="POST" action={`/pokemon/${id}?_method=DELETE`}>
                    <button type="submit" value="Delete Pokemon"> Delete {poke.name}
                    </button>
                </form>
                <a href="/pokemon">All Pokemon List</a>
            </div>
        );
    }
}
module.exports = Show;