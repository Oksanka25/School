const React = require("react");
const DefaultLayout = require("./layouts/default");
class Home extends React.Component {
    render() {
        return (
            <DefaultLayout title={"Welcome to Singers and Songs App"}>
                <div>
                    <button > <a href="/singers"> All singers</a>

                    </button>
                </div>
            </DefaultLayout>
        );
    }
}

module.exports = Home;