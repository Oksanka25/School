const React = require('react')
const DefaultLayout = require('./layouts/Default')

class Index extends React.Component {
    render() {
        const { logs } = this.props;
        console.log(logs);

        return (
            <DefaultLayout title={"Captain's Log"}>
                <nav>
                    <a href={"/logs/new"}> Add a Log </a>
                </nav>
                <ul>
                    {logs.map((log, i) => {
                        return <li key={i}>
                            <a href={`/logs/${log._id}`}> {log.title} </a>
                        </li>
                    })}
                </ul>

            </DefaultLayout>
        )
    }
}

module.exports = Index