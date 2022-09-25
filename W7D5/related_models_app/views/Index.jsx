const React = require('react')
const DefaultLayout = require('./layouts/Default')

class Index extends React.Component {
    render() {
        const { singers } = this.props;
        console.log(singers);

        return (
            <DefaultLayout title={"List of Singers"}>
                <nav>
                    <a href={"/singers/new"}> Add a Singer </a>
                </nav>
                <ul>
                    {singers.map((singer, i) => {
                        return <li key={i}>
                            <a href={`/singers/${singer._id}`}> {singer.name} </a>
                        </li>
                    })}
                </ul>

            </DefaultLayout>
        )
    }
}

module.exports = Index