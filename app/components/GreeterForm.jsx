var React = require('react');

const GreeterForm = React.createClass({
    onFormSubmit: function (e) {
        e.preventDefault();

        var data = {};

        var name = this.refs.name.value;
        var message = this.refs.message.value;

        if (name.length > 0) {
            this.refs.name.value = '';
            data.name = name;
        }

        if (message.length > 0) {
            this.refs.message.value = '';
            data.message = message;
        }

        this.props.onNewData(data);
    },

    render: function () {
        return (
            <form onSubmit={this.onFormSubmit}>
                <input type="text" ref="name"/>
                <br/>
                <textarea ref="message"/>
                <br/>
                <button>Set Name</button>
            </form>
        );
    }
});

module.exports = GreeterForm;