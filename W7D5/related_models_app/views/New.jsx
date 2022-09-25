const React = require("react");
const DefaultLayout = require("./layouts/default");
class New extends React.Component {
    render() {
        return (
            <DefaultLayout title={"Add a New Singer "}>
                <div>
                    <form action="/singers" method="POST">
                        Name: <input type="text" name="name" required />
                        <br />
                        Genre: <input type="textarea" name="genre" required />
                        <br />
                        Image: <input type="textarea" name="image" required />
                        <br />
                        My Favorite: <input type="checkbox" name="isMyFavorite" />
                        <br />
                        <input type="submit" name="" value="Add a Singer" />
                    </form>
                </div>
            </DefaultLayout>
        );
    }
}

module.exports = New;