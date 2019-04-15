import React, {Component} from 'react';
import InputMask from 'react-input-mask';
import './ContactForm.css';


class ContactForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            phone: '',
            email: '',
            message: '',
            nameError: '',
            phoneError: '',
            emailError: '',
            messageError: '',
            successMessage: '',
        };
    }

    validateEmail = () => {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const isValid = re.test(this.state.email.toLowerCase());
        const field = document.getElementById("FormEmail");

        if (isValid) {
            this.setState({emailError: ''});
            field.className = '';
        } else {
            this.setState({emailError: 'Digite um e-mail válido.'});
            field.className = 'form-error';
        }

        return isValid;
    }

    validateName = () => {
        const nameLength = this.state.name.length;
        const isEmpty = nameLength <= 0;
        const field = document.getElementById("FormName");

        if (isEmpty) {
            this.setState({nameError: 'Nome é um campo obrigatório.'});
            field.className = 'form-error';
        } else {
            this.setState({nameError: ''});
            field.className = '';
        }

        return !isEmpty;
    }

    validateMessage = () => {
        const messageLength = this.state.message.length;
        const field = document.getElementById("FormMessage");
        const isEmpty = messageLength === 0;
        const isShort = messageLength < 10;

        if (isEmpty) {
            field.className = 'form-error';
            this.setState({messageError: 'Mensagem é um campo obrigatório.'});
        } else if (isShort) {
            field.className = 'form-error';
            this.setState({messageError: 'Mensagem muito curta.'});
        } else {
            field.className = '';
            this.setState({messageError: ''});
        }

        return !isEmpty && !isShort;
    }

    submitForm = () => {
        const isValid = this.validateEmail() && this.validateMessage() && this.validateName();

        if (isValid) {
            this.setState({successMessage: 'Sua mensagem foi enviada com sucesso!'});
            setTimeout(() => {
                this.setState({successMessage: ''});
            }, 5000);
        } else {
            this.setState({successMessage: ''});
        }
    }

    setPhone = (event) => {
        this.setState({phone: event.target.value});
    }

    setEmail = (event) => {
        this.setState({email: event.target.value});
    }

    setMessage = (event) => {
        this.setState({message: event.target.value});
    }

    setName = (event) => {
        this.setState({name: event.target.value});
    }

    render() {
        return (
            <form className='hma roboto'>
                <label>{this.state.nameError}</label>
                <input
                    placeholder='Nome'
                    id='FormName'
                    value={this.state.name}
                    onChange={this.setName}
                />
                <InputMask
                    className='input-mask'
                    mask="(99) 999999999"
                    placeholder='Telefone'
                    value={this.state.phone}
                    onChange={this.setPhone}
                />
                <label>{this.state.emailError}</label>
                <input
                    placeholder='E-mail'
                    id='FormEmail'
                    value={this.state.email}
                    onChange={this.setEmail}
                />
                <label>{this.state.messageError}</label>
                <textarea
                    placeholder='Mensagem'
                    id='FormMessage'
                    value={this.state.message}
                    onChange={this.setMessage}
                />
                <div className='flex justify-between items-baseline flex-row flex-wrap'>
                    <div className='success-message roboto'>{this.state.successMessage}</div>
                    <div
                        className='button pointer no-underline white lato'
                        onClick={this.submitForm}
                    >
                        Enviar
                    </div>
                </div>
            </form>

        );
    }
}

export default ContactForm;