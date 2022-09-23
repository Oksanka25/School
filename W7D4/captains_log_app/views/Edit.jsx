const React = require("react");
const DefaultLayout = require("./layouts/default");

class Edit extends React.Component {
    render() {
        return (
            <DefaultLayout title="Edit Log">
                <form
                    action={`/logs/${this.props.log._id}?_method=PUT`}
                    method="POST"
                >
                    Title:{" "}
                    <input
                        type="text"
                        name="title"
                        defaultValue={this.props.log.title}
                    />
                    <br />
                    Entry:{" "}
                    <input type="textarea" name="entry" defaultValue={this.props.log.entry} />
                    <br />
                    Ship Broken:
                    {this.props.log.shipIsBroken ? (
                        <input type="checkbox" name="shipIsBroken" defaultChecked />
                    ) : (
                        <input type="checkbox" name="shipIsBroken" />
                    )}
                    <br />
                    <input type="submit" value="Submit Updates" />
                </form>
            </DefaultLayout>
        );
    }
}
module.exports = Edit;