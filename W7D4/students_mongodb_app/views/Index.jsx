const React = require('react')
const DefaultLayout = require('./layouts/Default')

class Index extends React.Component {
    render() {
        const { students } = this.props;
        console.log(students);

        return (
            <DefaultLayout title={"Student Dashboard"}>
                <nav>
                    <a href={"/students/new"}> Add a Student </a>
                </nav>
                <ul>
                    {students.map((student, i) => {
                        return <li key={i}>
                            <a href={`/students/${student._id}`}> {student.name} </a> has a GPA of {student.gpa} <br />
                            {student.isPassing ? "And is Eligible to Graduate" : "And is NOT Eligible to Graduate"}
                            <br />
                            {/* // edit */}
                            <a href={`/students/${student._id}/edit`}> Edit Student</a>
                            {/* // delete */}
                            <form action={`/students/${student._id}?_method=DELETE`} method="POST">
                                <input type="submit" value="DELETE" />
                            </form>
                        </li>
                    })}
                </ul>

            </DefaultLayout>
        )
    }
}

module.exports = Index