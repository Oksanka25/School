const React = require("react");
const DefaultLayout = require("./layouts/default");
class New extends React.Component {
    render() {
        return (
            <DefaultLayout title={"New Captain's Log "}>
                <div>
                    <form action="/logs" method="POST">
                        Title: <input type="text" name="title" required />
                        <br />
                        Entry: <input type="textarea" name="entry" required />
                        <br />
                        Broken Ship <input type="checkbox" name="shipIsBroken" required />
                        <br />
                        <input type="submit" name="" value="Create a Log" />
                    </form>
                </div>
            </DefaultLayout>
        );
    }
}

module.exports = New;