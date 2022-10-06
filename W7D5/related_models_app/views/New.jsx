const React = require("react");
const DefaultLayout = require("./layouts/default");
class New extends React.Component {
    render() {
        return (
            <DefaultLayout title={"Add a New Singer "}>
                <div>
                    <form action="/singers" method="POST">
                        <label for="name"> Singer Name: </label>
                        <input id="name" name="name" type="text" required />
                        <br />
                        <label for="genre"> Singer Genre: </label>
                        <input id="genre" name="genre" type="text" required />
                        <br />
                        <label for="image"> Singer Image(url): </label>
                        <input id="image" name="image" type="text" required />
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