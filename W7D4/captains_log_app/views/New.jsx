const React = require("react");
const DefaultLayout = require("./layouts/default");
class New extends React.Component {
    render() {
        return (
            <DefaultLayout title={"New Captain's Log "}>
                <div>
                    <form action="/logs" method="POST">
                        Title: <input type="text" name="title" />
                        <br />
                        Entry: <input type="textarea" name="entry" />
                        <br />
                        Broken Ship <input type="checkbox" name="shipIsBroken" />
                        <br />
                        <input type="submit" name="" value="Create a Log" />
                    </form>
                </div>
            </DefaultLayout>
        );
    }
}

module.exports = New;