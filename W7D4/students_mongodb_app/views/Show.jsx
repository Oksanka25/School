
const React = require("react");
const DefaultLayout = require("./layouts/default");
class Show extends React.Component {
    render() {
        const { student } = this.props;
        return (
            <DefaultLayout title={"Student Profile"}>
                <div>
                    <nav>
                        <a href="/students"> Back2 Dashboard</a>
                    </nav>
                    <h1> Show Page </h1>
                    {student.name}'s grade is  {student.gpa}
                    <br /> Student{" "}
                    {student.isPassing
                        ? "Is Eligible to Graduate"
                        : "Is NOT Eligible to Graduate"}
                </div>
            </DefaultLayout>
        );
    }
}
module.exports = Show;