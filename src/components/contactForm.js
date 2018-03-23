import React, { Component } from 'react';
import Field from './contactFields.js';
import FormErrors from './FormErrors.js';


class ContactForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            form: {
                name: ' ',
                phone: ' ',
                email: ' ',
                message: ' ',
                formErrors: { name: '', phone: '', email: '', message: '' },
                nameValid: false,
                phoneValid: false,
                emailValid: false,
                messageValid: false
            }
        };

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.reset = this.reset.bind(this);
    }

    reset() {
        this.setState({
            form: {
                name: '',
                phone: '',
                email: '',
                message: '',
                formErrors: { name: '', phone: '', email: '', message: '' },
                nameValid: false,
                phoneValid: false,
                emailValid: false,
                messageValid: false

            }
        });
    }

    handleInputChange(event) {
        const { value, name } = event.target;
        const { form } = this.state;
        form[name] = value;
        this.setState({
            form: { ...form }
        }, () => {
            this.validateField(name, value)
        });

    }

    validateField(fieldName, value) {
        let fieldValidationErrors = this.state.form.formErrors;
        let emailValid = this.state.form.emailValid;
        let nameValid = this.state.form.nameValid;
        let phoneValid = this.state.form.phoneValid;
        let messageValid = this.state.form.messageValid;

        switch (fieldName) {
            case 'email':
                emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
                fieldValidationErrors.email = emailValid ? '' : ' is invalid';
                break;
            case 'name':
                nameValid = value.length >= 6;
                fieldValidationErrors.name = nameValid ? '' : ' is too short';
                break;
            case 'phone':
                var phoneRegEx = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
                phoneValid = value.match(phoneRegEx);
                fieldValidationErrors.phone = phoneValid ? '' : ' is invalid';
                break;
            case 'message':
                messageValid = value.length >= 15;
                fieldValidationErrors.message = messageValid ? '' : ' is too short';
                break;
            default:
                break;
        }
        this.setState({
            formErrors: fieldValidationErrors,
            emailValid: emailValid,
            nameValid: nameValid,
            phonelValid: phoneValid,
            messageValid: messageValid
        }, this.validateForm);
    }

    validateForm() {
        this.setState({ formValid: this.state.form.emailValid && this.state.form.nameValid && this.state.form.nameValid && this.state.form.messageValid });
    }

    handleSubmit(event) {
        event.preventDefault();
        console.log('handleSubmit called, form values are:', this.state.form);
        this.setState({
            form: {
                name: '',
                phone: '',
                email: '',
                message: '',
                formErrors: { name: '', phone: '', email: '', message: '' },
                nameValid: false,
                phoneValid: false,
                emailValid: false,
                messageValid: false
            }
        });

    }

    render() {
        const { name, message, phone, email, formErrors } = this.state.form;
        return (
            <form className="col l6 s12" onSubmit={this.handleSubmit} >
                <Field id="name" name="name" label="Name" type="text" value={name} onChange={this.handleInputChange} />
                <Field id="phone" name="phone" label="Phone Number" type="tel" value={phone} onChange={this.handleInputChange} />
                <Field id="email" name="email" label="Email" type="text" value={email} onChange={this.handleInputChange} />
                <Field id="message" name="message" label="Message" type="text" value={message} onChange={this.handleInputChange} />
                <button type="submit" className="submitBtn btn waves-effect waves-light btn-medium light-blue darken-1">Submit</button>
                <button type="button" className="btn waves-effect waves-light btn-small red accent-4" onClick={this.reset}>Clear</button>
                <FormErrors formErrors={formErrors} />
            </form >
        );
    }
}
export default ContactForm