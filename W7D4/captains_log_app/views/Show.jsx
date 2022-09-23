const React = require("react");
const DefaultLayout = require("./layouts/default");
class Show extends React.Component {
    render() {
        const { log } = this.props;
        return (
            <DefaultLayout title={"Log Details"}>
                <div>
                    <h1>Log Show Page </h1>
                    <h4> Title: {log.title} </h4>
                    <p> Entry details: {log.entry} </p>
                    <br /> Ship{" "}
                    {log.shipIsBroken
                        ? " Is Broken"
                        : "Is NOT Broken"}
                    {/* <br />
                    <p>Log was created: {log.createdAt} </p>
                    <br />
                    <p>Log was last updated: {log.updatedAt} </p> */}
                    <br />
                    <br />
                    {/* // edit */}
                    <button>
                        <a href={`/logs/${log._id}/edit`}> Edit Log</a>
                    </button>
                    <br />
                    {/* // delete */}
                    <form action={`/logs/${log._id}?_method=DELETE`} method="POST">
                        <input type="submit" value="DELETE" />
                    </form>
                    <a href="/logs"> Back to Captain's Log</a>
                </div>
            </DefaultLayout>
        );
    }
}
module.exports = Show;