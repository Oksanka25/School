const React = require('react');

class Index extends React.Component {
    render() {
        const { allPokemon } = this.props;
        return (
            <div>
                <nav>
                    <a href="/pokemon/new">Create a New Pokemon</a>
                </nav>
                <h1>See all the Pokemon!</h1>
                <ul>
                    {allPokemon.map((poke, i) => {
                        return (
                            <li key={i}>
                                <a href={`/pokemon/${i}`}>
                                    {poke.name.charAt(0).toUpperCase() + poke.name.slice(1)}
                                </a>
                            </li>
                        )
                    })}
                </ul>
            </div>
        )
    }
}
module.exports = Index;