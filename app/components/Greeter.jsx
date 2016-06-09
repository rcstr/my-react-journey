var React = require('react');

var GreeterForm = require('./GreeterForm');
var GreeterMessage = require('./GreeterMessage');

const Greeter = React.createClass({
    getInitialState: function () {
        return {
            name: this.props.name,
            message: this.props.message
        }
    },

    handleNewData: function (data) {
        this.setState(data);
    },

    render: function () {
        var name = this.state.name;
        var message = this.state.message;

        return (
            <div>
                <GreeterMessage name={this.state.name} message={this.state.message}/>
                <GreeterForm onNewData={this.handleNewData}/>
            </div>
        );
    }
});

module.exports = Greeter;