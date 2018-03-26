import React, { Component } from 'react';
import Field from './contactFields.js';


class ContactForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            form: {
                name: ' ',
                phone: ' ',
                email: ' ',
                message: ' ',
                errorMessage: '',
                submit: false
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
                errorMessage: '',
                submit: false,
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
                name: '',
                phone: '',
                email: '',
                message: '',
                errorMessage: '',
                submit: true
            }
        });

    }
    render() {
        const { name, message, phone, email, submit, errorMessage } = this.state.form;
        return (
            <form className="col l6 s12" onSubmit={this.handleSubmit} >
                <div className="formErrors">{errorMessage}</div>
                <Field id="name" name="name" label="Name" type="text" value={name} onChange={this.handleInputChange} />
                <Field id="phone" name="phone" label="Phone Number" type="tel" value={phone} onChange={this.handleInputChange} />
                <Field id="email" name="email" label="Email" type="text" value={email} onChange={this.handleInputChange} />
                <Field id="message" name="message" label="Message" type="text" value={message} onChange={this.handleInputChange} />
                <button type="submit" className="submitBtn btn waves-effect waves-light btn-medium light-blue darken-1">Submit</button>
                <button type="button" className="btn waves-effect waves-light btn-small red accent-4" onClick={this.reset}>Clear</button>
                <i style={{ opacity: submit ? 1 : 0 }} className="large material-icons messageSent z-depth-1">playlist_add_check</i>
            </form >
        );
    }
}
export default ContactForm