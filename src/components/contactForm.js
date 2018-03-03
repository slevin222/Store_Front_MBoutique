import React, { Component } from 'react';
import Field from './field.js';


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

    }

    render() {
        const { firstName, message, phone, email } = this.state.form;
        return (
            <form className="col l7 s12" onSubmit={this.handleSubmit} >
                <Field name="firstName" label="First Name" type="text" value={firstName} onChange={this.handleInputChange} />
                <Field name="phone" label="Phone Number" type="tel" value={phone} onChange={this.handleInputChange} />
                <Field name="email" label="Email" type="email" value={email} onChange={this.handleInputChange} />
                <Field name="message" label="message" type="text" value={message} onChange={this.handleInputChange} />
                <button className="waves-effect waves-light btn-small light-blue darken-1">Submit</button>
                <button type="button" className="waves-effect waves-light btn-small red accent-4 clearBtn" onClick={this.reset}>Clear Info</button>
            </form>

        );
    }
}
export default ContactForm