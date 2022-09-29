const React = require("react");
const DefaultLayout = require("../layouts/default");

class Edit extends React.Component {
    render() {
        const { oneSinger } = this.props;
        const { song } = this.props;
        return (
            <DefaultLayout title="Edit a Song">

                <form
                    action={`/songs/${song._id}?_method=PUT`}
                    method="POST"
                >
                    Name:{" "}
                    <input
                        type="text"
                        name="name"
                        defaultValue={song.name}

                    />
                    <br />
                    Year:{" "}  <input name="year" type="number" min="1600" max="2022" step="1" required /> <br />
                    Rating:{" "} <input name="rating" type="number" min="0" step="1" max="5" required /><br />
                    Comment: {" "}
                    <input type="textarea" name="content" defaultValue={song.content} />
                    <br />
                    <input type="submit" value="Submit Song Updates" />
                </form>


            </DefaultLayout>
        );
    }
}
module.exports = Edit;