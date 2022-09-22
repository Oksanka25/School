const React = require("react");
const DefaultLayout = require("./layouts/default");
class New extends React.Component {
    render() {
        return (
            <DefaultLayout title={"New Student Page"}>
                <div>
                    <form action="/students" method="POST">
                        Name: <input type="text" name="name" />
                        <br />
                        gpa: <input type="text" name="gpa" />
                        <br />
                        Eligible for Graduation <input type="checkbox" name="isPassing" />
                        <br />
                        <input type="submit" name="" value="Create Student" />
                    </form>
                </div>
            </DefaultLayout>
        );
    }
}

module.exports = New;