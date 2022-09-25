const React = require("react");
const DefaultLayout = require("./layouts/default");
class Show extends React.Component {
    render() {
        const { oneSinger } = this.props;
        const { singers } = this.props;
        const { songs } = this.props;
        return (
            <DefaultLayout title={"Singer Show Page"}>
                <div>
                    <h4> Name: {oneSinger.name} </h4>
                    <h5> Genre: {oneSinger.genre} </h5>
                    <img src={oneSinger.image} alt={oneSinger.name} />
                    <br /> {oneSinger.name}
                    {oneSinger.isMyFavorite
                        ? " Is one of my Favorite Musicians"
                        : " is NOT one of my Favorite Musicians "}
                    <br />
                    <br />
                    <br />
                    {/* // edit */}
                    <button>
                        <a href={`/singers/${oneSinger._id}/edit`}> Edit Singer</a>
                    </button>
                    <br />
                    {/* // delete */}
                    <button>
                        <form action={`/singers/${oneSinger._id}?_method=DELETE`} method="POST">
                            <input type="submit" value="DELETE" />
                        </form>
                    </button>
                    <br />
                    <p>Singer added to the list: {new Date(oneSinger.createdAt).toLocaleString()} </p>
                    <p>Singer last updated: {new Date(oneSinger.updatedAt).toLocaleString()} </p> <br />
                    <a href="/singers"> Back to Singers List</a>

                    <section>
                        <h2>Songs of {oneSinger.name}</h2>

                        {songs.map((song, i) => {
                            return <>
                                <h3> Name: {song.name}</h3>
                                <h3> Year: {song.year}</h3>
                                <h3> Rating: {song.rating}
                                </h3>
                                <p>
                                    {song.content}
                                </p>
                                {/* // edit */}
                                <button>
                                    <a href={`/songs/${song._id}/edit`}> Edit Song</a>
                                </button>
                                <form action={`/songs/${song._id}?_method=DELETE`} method="POST">
                                    <input type="submit" value="Delete Song" />
                                </form>
                            </>
                        })}

                    </section>
                    <section>
                        <h3>Add a Song:</h3>
                        <form method="POST" action="/songs">
                            Title: <input name="name" type="text" required /> <br />
                            Year:  <input name="year" type="number" min="1600" max="2022" step="1" required /> <br />
                            Rating: <input name="rating" type="number" min="0" step="1" max="5" required /><br />
                            Comment: <input name="content" type="text" /> <br />
                            Singer: <input type="singer" name="singer" value={oneSinger._id} required /> <br />
                            <input type="submit" value="Add this song..." />
                        </form>
                    </section>
                </div>
            </DefaultLayout>
        );
    }
}
module.exports = Show;