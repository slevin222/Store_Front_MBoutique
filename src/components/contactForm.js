import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';

class Form extends Component {
    constructor(props) {
        super(props);

    }
    sendData(values, dispatch, props) {
        console.log("Form submitted: ", values);
        props.reset();
    }

    renderInput(props) {
        return (
            <div className="form-group">
                <label>{props.label}</label>
                <input {...props.input} type={props.type ? props.type : 'text'} className="form-control" />
                <p className="red-text text-darken-2">{props.meta.touched && props.meta.error}</p>
            </div>
        )
    }

    render() {
        const submitted = this.props.submitSucceeded;

        return (
            <form className="col l6 s12" onSubmit={this.props.handleSubmit(this.sendData)} >
                <Field id="name" name="name" label="Name" type="text" component={this.renderInput} />
                <Field id="phone" name="phone" label="Phone Number" type="tel" component={this.renderInput} />
                <Field id="email" name="email" label="Email" type="text" component={this.renderInput} />
                <Field id="message" name="message" label="Message" type="text" component={this.renderInput} />
                <button type="submit" className="submitBtn btn waves-effect waves-light btn-medium light-blue darken-1">Submit</button>
                <button type="button" className="btn waves-effect waves-light btn-small red accent-4" onClick={this.props.reset}>Clear</button>
                <i style={{ opacity: submitted ? 1 : 0 }} className="large material-icons messageSent z-depth-1">playlist_add_check</i>
            </form >
        );
    }
}

function validate(values) {
    const error = {};

    if (!values.name) {
        error.firstName = 'Please enter your Name.'
    }

    if (!values.email) {
        error.email = 'Please enter a valid email.'
    }

    if (!values.message) {
        error.message = 'Please enter a message'
    }

    if (!values.phone) {
        error.phone = 'Please enter a phone Number'
    }

    return error;
}

Form = reduxForm({
    form: 'contact-form',
    validate
})(Form);

export default Form;

