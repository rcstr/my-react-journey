var React = require('react');

const GreeterMessage = React.createClass({
    render: function () {
        return (
            <div>
                <h1>Hello {this.props.name}!</h1>
                <p>{this.props.message}</p>
            </div>
        );
    }
});

module.exports = GreeterMessage;