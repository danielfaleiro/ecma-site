import React, {Component} from 'react';
import InputMask from 'react-input-mask';
import ReactNotification from "react-notifications-component";
import Loader from 'react-loader-spinner';
import "react-notifications-component/dist/theme.css";
import './ContactForm.css';


class ContactForm extends Component {
    constructor(props) {
        super(props);
        this.addSuccessNotification = this.addSuccessNotification.bind(this);
        this.notificationDOMRef = React.createRef();
        this.state = {
            name: '',
            phone: '',
            email: '',
            message: '',
            nameError: '',
            phoneError: '',
            emailError: '',
            messageError: '',
            isSending: false,
        };
    }

    addSuccessNotification() {
        this.notificationDOMRef.current.addNotification({
          title: "Sucesso!",
          message: "Mensagem enviada.",
          type: "success",
          insert: "top",
          container: "top-center",
          animationIn: ["animated", "fadeIn"],
          animationOut: ["animated", "fadeOut"],
          dismiss: { duration: 5000 },
          dismissable: { click: true }
        });
    }

    addErrorNotification() {
        this.notificationDOMRef.current.addNotification({
          title: "Erro",
          message: "Não foi possível enviar a mensagem.",
          type: "danger",
          insert: "top",
          container: "top-center",
          animationIn: ["animated", "fadeIn"],
          animationOut: ["animated", "fadeOut"],
          dismiss: { duration: 5000 },
          dismissable: { click: true }
        });
    }

    validateEmail = () => {
        const email = this.state.email.toLowerCase();
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const isValid = re.test(email);
        const field = document.getElementById("FormEmail");

        if (email.length === 0) {
            this.setState({emailError: 'E-mail é um campo obrigatório.'});
            field.className = 'form-error';
        } else if (isValid) {
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

    validateForm = () => {
        const isMessageValid = this.validateMessage();
        const isNameValid = this.validateName();
        const isEmailValid = this.validateEmail();

        return isNameValid && isEmailValid && isMessageValid;
    }

    clearForm = () => {
        this.setState({name: ''});
        this.setState({phone: ''});
        this.setState({email: ''});
        this.setState({message: ''});
        this.setState({nameError: ''});
        this.setState({phoneError: ''});
        this.setState({emailError: ''});
        this.setState({messageError: ''});
    }

    submitForm = () => {
        if (this.state.isSending)
            return;

        const isValid = this.validateForm();

        if (isValid) {
            this.setState({isSending: true});
            const button = document.getElementById("form-button");
            button.classList.add("disabled");
            fetch('https://serene-forest-13940.herokuapp.com/sendmessage', {
                method: 'post',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({
                    name: this.state.name,
                    phone: this.state.phone,
                    email: this.state.email,
                    message: this.state.message
                })
            }).then(response => {
                if (response.status >= 400) {
                    this.addErrorNotification();
                } else if (response.status >= 200) {
                    this.addSuccessNotification();
                    this.clearForm();
                }
                this.setState({isSending: false});
                button.classList.remove("disabled");
            }).catch(() => {
                this.addErrorNotification();
                this.setState({isSending: false});
                button.classList.remove("disabled");
            });
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
            <form className='roboto'>
                <ReactNotification ref={this.notificationDOMRef} />
                <label>{this.state.nameError}</label>
                <input
                    placeholder='Nome'
                    id='FormName'
                    value={this.state.name}
                    onChange={this.setName}
                    type='text'
                />
                <InputMask
                    className='input-mask'
                    mask="(99) 999999999"
                    placeholder='Telefone'
                    value={this.state.phone}
                    onChange={this.setPhone}
                    type='tel'
                />
                <label>{this.state.emailError}</label>
                <input
                    placeholder='E-mail'
                    id='FormEmail'
                    value={this.state.email}
                    onChange={this.setEmail}
                    type='email'
                />
                <label>{this.state.messageError}</label>
                <textarea
                    placeholder='Mensagem'
                    id='FormMessage'
                    value={this.state.message}
                    onChange={this.setMessage}
                    type='text'
                />
                <div id='form-button' className='fr button no-underline white lato form-button' onClick={this.submitForm}>
                    {this.state.isSending ?
                        <Loader
                            id='form-loader'
                            type="ThreeDots"
                            color="#FFFFFF"
                            height="20"	
                            width="20"
                        />
                        :
                        "Enviar"
                    }
                </div>
            </form>
        );
    }
}

export default ContactForm;