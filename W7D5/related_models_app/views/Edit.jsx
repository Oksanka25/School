const React = require("react");
const DefaultLayout = require("./layouts/default");

class Edit extends React.Component {
    render() {
        return (
            <DefaultLayout title="Edit a Singer">
                <form
                    action={`/singers/${this.props.singer._id}?_method=PUT`}
                    method="POST"
                >
                    Name:{" "}
                    <input
                        type="text"
                        name="name"
                        defaultValue={this.props.singer.name}

                    />
                    <br />
                    Genre:{" "}
                    <input type="text" name="genre" defaultValue={this.props.singer.genre} />
                    <br />
                    Image: {" "}
                    <input type="LINK" name="image" defaultValue={this.props.singer.image} /> <br />
                    My Favorite:
                    {this.props.singer.isMyFavorite ? (
                        <input type="checkbox" name="isMyFavorite" defaultChecked />
                    ) : (
                        <input type="checkbox" name="isMyFavorite" />
                    )}
                    <br />
                    <input type="submit" value="Submit Updates" />
                </form>
            </DefaultLayout>
        );
    }
}
module.exports = Edit;