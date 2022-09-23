const React = require('react');
// import "../../styles/app.css";


class DefaultLayout extends React.Component {
    render() {
        return (
            <>
                <html>
                    <head>
                        <link type="text/css" rel="stylesheet" href="/W7D4/captains_log_app/styles/app.css"></link>
                        <title>{this.props.title}</title>
                    </head>
                    <body>
                        <h1>{this.props.title}</h1>
                        {this.props.children}
                    </body>
                </html>
            </>
        )
    }
}

module.exports = DefaultLayout;