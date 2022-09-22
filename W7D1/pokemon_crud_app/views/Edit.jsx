const React = require('react');

class Edit extends React.Component {
    render() {
        const poke = this.props.onePokemon;
        const { allPokemon } = this.props; // object destructuring

        const id = allPokemon.findIndex((el) => {
            return el.name === poke.name;
        })
        return (
            <div>
                <h1>Edit Pokemon page</h1>
                <form method="POST" action={`/pokemon/${id}?_method=PUT`}>
                    <label for="name">Pokemon Name:</label>
                    <input id="name" type="text" name="name" value={`${poke.name}`} />
                    <label for="img">Pokemon Image:</label>
                    <input id="img" type="text" name="img" value={`${poke.img}`} />

                    <button type="submit" value="Edit a Pokemon"> Edit
                    </button>
                </form>
            </div>
        );
    }
}

module.exports = Edit;