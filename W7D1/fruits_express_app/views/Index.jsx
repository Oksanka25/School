const React = require('react');

class Index extends React.Component {
    render() {
        const { allFruits } = this.props;
        return (
            <div>
                <h1>Fruits Index Page</h1>
                <ul>
                    {allFruits.map((fruit, i) => {
                        return (
                            <li key={i}>
                                The{' '}
                                <a href={`/fruits/${i}`}>
                                    {fruit.name}
                                </a>{' '}
                                is {fruit.color} <br></br>
                                {fruit.readyToEat
                                    ? `It is ready to eat`
                                    : `It is not ready to eat`}
                                <br />
                            </li>
                        );
                    })}
                </ul>
            </div>
        );
    }
}
module.exports = Index;