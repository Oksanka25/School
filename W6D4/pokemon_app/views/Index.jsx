const React = require('react');

class Index extends React.Component {
    render() {
        const { pokemon } = this.props;
        return (
            <h1>See all the Pokemons!</h1>
        )
    }
}
module.exports = Index;