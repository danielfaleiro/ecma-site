import React, { useState } from 'react'
import InputMask from 'react-input-mask'
import { store } from 'react-notifications-component'
import Loader from 'react-loader-spinner'
import 'react-notifications-component/dist/theme.css'
import './ContactForm.css'

const ContactForm = () => {
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [nameError, setNameError] = useState('')
  const [emailError, setEmailError] = useState('')
  const [messageError, setMessageError] = useState('')
  const [isSending, setIsSending] = useState(false)

  const successNotification = {
    title: 'Sucesso!',
    message: 'Mensagem enviada.',
    type: 'success',
    insert: 'top',
    container: 'top-center',
    animationIn: ['animated', 'fadeIn'],
    animationOut: ['animated', 'fadeOut'],
    dismiss: { duration: 5000 },
    dismissable: { click: true }
  }

  const errorNotification = {
    title: 'Erro',
    message: 'Não foi possível enviar a mensagem.',
    type: 'danger',
    insert: 'top',
    container: 'top-center',
    animationIn: ['animated', 'fadeIn'],
    animationOut: ['animated', 'fadeOut'],
    dismiss: { duration: 5000 },
    dismissable: { click: true }
  }

  const validateEmail = () => {
    const lowerEmail = email.toLowerCase()
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    const isValid = re.test(lowerEmail)
    const field = document.getElementById('FormEmail')

    if (lowerEmail.length === 0) {
      setEmailError('E-mail é um campo obrigatório.')
      field.className = 'form-error'
    } else if (isValid) {
      setEmailError('')
      field.className = ''
    } else {
      setEmailError('Digite um e-mail válido.')
      field.className = 'form-error'
    }

    return isValid
  }

  const validateName = () => {
    const nameLength = name.length
    const isEmpty = nameLength <= 0
    const field = document.getElementById('FormName')

    if (isEmpty) {
      setNameError('Nome é um campo obrigatório.')
      field.className = 'form-error'
    } else {
      setNameError('')
      field.className = ''
    }

    return !isEmpty
  }

  const validateMessage = () => {
    const messageLength = message.length
    const field = document.getElementById('FormMessage')
    const isEmpty = messageLength === 0
    const isShort = messageLength < 10

    if (isEmpty) {
      field.className = 'form-error'
      setMessageError('Mensagem é um campo obrigatório.')
    } else if (isShort) {
      field.className = 'form-error'
      setMessageError('Mensagem muito curta.')
    } else {
      field.className = ''
      setMessageError('')
    }

    return !isEmpty && !isShort
  }

  const clearForm = () => {
    setName('')
    setPhone('')
    setEmail('')
    setMessage('')
    setNameError('')
    setMessageError('')
    setEmailError('')
  }

  const submitForm = () => {
    if (isSending) { return }

    const isValid = validateName() && validateEmail() && validateMessage()

    if (isValid) {
      setIsSending(true)
      const button = document.getElementById('form-button')
      button.classList.add('disabled')
      fetch('https://serene-forest-13940.herokuapp.com/sendmessage', {
        method: 'post',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: name,
          phone: phone,
          email: email,
          message: message
        })
      }).then(response => {
        if (response.status >= 400) {
          store.addNotification({
            ...errorNotification
          })
        } else if (response.status >= 200) {
          store.addNotification({
            ...successNotification
          })
          clearForm()
        }
        setIsSending(false)
        button.classList.remove('disabled')
      }).catch(() => {
        store.addNotification({
          ...errorNotification
        })
        setIsSending(false)
        button.classList.remove('disabled')
      })
    }
  }
  return (
    <form className='roboto'>
      <label>Nome:</label>
      <input
        placeholder='Ex.: João Silva'
        id='FormName'
        value={name}
        onChange={(e) => setName(e.target.value)}
        type='text'
        maxLength='100'
      />
      <div className='error-msg'>{nameError}</div>
      <label>Telefone (Opcional):</label>
      <InputMask
        className='input-mask'
        id='formTel'
        mask="(99) 999999999"
        placeholder='Ex.: (62) 98765-4321'
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        type='tel'
      />
      <label>E-mail:</label>
      <input
        placeholder='Ex.: joaosilva@email.com'
        id='FormEmail'
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        type='email'
        maxLength='200'
      />
      <div className='error-msg'>{emailError}</div>
      <label>Mensagem:</label>
      <textarea
        placeholder='Digite sua mensagem aqui.'
        id='FormMessage'
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        type='text'
        maxLength='3000'
      />
      <div className='error-msg'>{messageError}</div>
      <div id='form-button' className='fr button no-underline white lato form-button' onClick={submitForm}>
        {isSending
          ? <Loader
            id='form-loader'
            type="ThreeDots"
            color="#FFFFFF"
            height="15"
          />
          : 'Enviar'
        }
      </div>
    </form>
  )
}

export default ContactForm
