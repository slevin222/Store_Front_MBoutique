import React, { Component } from 'react';
import Field from './contactFields.js';


class ContactForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            form: {
                firstName: ' ',
                phone: ' ',
                email: ' ',
                message: ' ',
            }
        };

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.reset = this.reset.bind(this);
    }

    reset() {
        this.setState({
            form: {
                firstName: '',
                phone: '',
                email: '',
                message: ''
            }
        });
    }

    handleInputChange(event) {
        const { value, name } = event.target;
        const { form } = this.state;
        form[name] = value;
        this.setState({
            form: { ...form }
        });
    }

    handleSubmit(event) {
        event.preventDefault();
        console.log('handleSubmit called, form values are:', this.state.form);
        this.setState({
            form: {
                firstName: '',
                phone: '',
                email: '',
                message: ''
            }
        });

    }

    render() {
        const { firstName, message, phone, email } = this.state.form;
        return (

            <form className="col l6 s12" onSubmit={this.handleSubmit} >
                <Field name="firstName" label="Name" type="text" value={firstName} onChange={this.handleInputChange} />
                <Field name="phone" label="Phone Number" type="tel" value={phone} onChange={this.handleInputChange} />
                <Field name="email" label="Email" type="email" value={email} onChange={this.handleInputChange} />
                <Field name="message" label="Message" type="text" value={message} onChange={this.handleInputChange} />
                <button className="submitBtn btn waves-effect waves-light btn-small light-blue darken-1">Submit</button>
                <button type="button" className="btn waves-effect waves-light btn-small red accent-4" onClick={this.reset}>Clear</button>
            </form>

        );
    }
}
export default ContactForm