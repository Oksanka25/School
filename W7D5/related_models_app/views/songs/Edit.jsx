const React = require("react");
const DefaultLayout = require("../layouts/default");

class Edit extends React.Component {
    render() {
        const { songs } = this.props;
        const song = this.props.song;
        return (
            <DefaultLayout title="Edit a Song">
                {songs.map((song, i) => {
                    return <>
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
                            <input type="number" name="rating" defaultValue={this.props.song.rating} />
                            <br />
                            Comment: {" "}
                            <input type="textarea" name="content" defaultValue={this.props.song.content} />
                            <br />
                            <input type="submit" value="Submit Song Updates" />
                        </form>
                    </>
                })}

            </DefaultLayout>
        );
    }
}
module.exports = Edit;