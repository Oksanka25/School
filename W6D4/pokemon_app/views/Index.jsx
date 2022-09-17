const React = require('react');

class Index extends React.Component {
    render() {
        const { allPokemon } = this.props;
        return (
            <div>
                <h1>See all the Pokemon!</h1>
                <ul>
                    {allPokemon.map((poke, i) => {
                        return (
                            <li>
                                {poke.name.charAt(0).toUpperCase() + poke.name.slice(1)}
                            </li>
                        )
                    })}
                </ul>
            </div>
        )
    }
}
module.exports = Index;