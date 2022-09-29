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
                    Year:{" "}
                    <input type="number" name="year" defaultValue={song.year} />
                    <br />
                    Rating: {" "}
                    <input type="number" name="rating" defaultValue={song.rating} />
                    <br />
                    Comment: {" "}
                    <input type="textarea" name="content" defaultValue={song.content} />
                    <br />
                    Singer: <input type="singer" name="singer" value={oneSinger._id} required /> <br />
                    <input type="submit" value="Submit Song Updates" />
                </form>


            </DefaultLayout>
        );
    }
}
module.exports = Edit;