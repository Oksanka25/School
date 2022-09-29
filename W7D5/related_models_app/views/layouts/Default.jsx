const React = require('react');
class DefaultLayout extends React.Component {
    render() {
        return (
            <>
                <html>
                    <head>
                        <link type="text/css" rel="stylesheet" href="/styles/main.css"></link>
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