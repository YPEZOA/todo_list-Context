import FormLayout from '../../components/FormLayout/FormLayout'
import InputForm from '../../components/InputForm/InputForm'
import Button from '../../components/Button/Button'
import LinkItem from '../../components/LinkItem/LinkItem'
import tasksIcon from '../../assets/images/tasks-icon.png'
import Image from '../../components/Image/Image'
import { useNavigate } from 'react-router-dom'
import MotionArticle from '../../components/MotionArticle/MotionArticle'
import { useState, useEffect } from 'react'
import { useFormik } from 'formik'
import * as St from './Login.styled'
import * as Yup from 'yup'

const Login = () => {
  const [formValid, setFormValid] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [errorSubmitMessage, setErrorSubmitMessage] = useState('')
  const URL = 'http://localhost:8080/api/user/login'

  const navigate = useNavigate()

  useEffect(() => {
    return () => {
      setFormValid(false)
      setIsSubmitted(false)
    }
  }, [formValid, isSubmitted])

  const ValidateLogin = Yup.object().shape({
    user: Yup.string()
      .trim()
      .matches(/^[a-zA-Z]+$/, 'Carácteres no válidos')
      .required('El usuario es requerido'),
    password: Yup.string().required('Por favor, ingresa la contraseña')
  })

  const login = (user, password) => {
    fetch(URL, {
      method: 'POST',
      body: JSON.stringify({
        user,
        password
      }),
      headers: {
        'Content-type': 'application/json'
      }
    })
      .then(response => response.json())
      .then(resp => {
        if (resp.status === 200 && resp.user) {
          const data = {
            ...resp.user,
            token: resp.token
          }
          localStorage.setItem('user', JSON.stringify(data))
          navigate('/user/home')
        } else {
          setErrorSubmitMessage(resp.message)
        }
      })
      .catch(err => {
        console.error(err)
      })
  }

  const formik = useFormik({
    initialValues: {
      user: '',
      password: ''
    },
    validationSchema: ValidateLogin,
    validateOnBlur: true,
    onSubmit: ({ user, password }) => {
      login(user, password)
      setIsSubmitted(true)
    }
  })

  const { errors, touched } = formik
  const anyError = errors.user || errors.password

  return (
    <MotionArticle>
      <Image
        url={tasksIcon}
        alt="tasks"
        width="110"
        style={{ paddingBottom: 20, paddingTop: 60 }}
      />
      <FormLayout
        onHandleSubmit={formik.handleSubmit}
        title="Bienvenido."
        style={{ position: 'relative' }}
      >
        <InputForm
          name="user"
          label="Usuario"
          type="text"
          id="name"
          autocomplete="off"
          value={formik.values.user}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {errors.user && touched.user && (
          <St.ErrorMessage>{errors.user}</St.ErrorMessage>
        )}
        <InputForm
          name="password"
          label="Contraseña"
          type="password"
          id="email"
          value={formik.values.password}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {errors.password && touched.password && !errorSubmitMessage.length && (
          <St.ErrorMessage>{errors.password}</St.ErrorMessage>
        )}

        <Button
          type="submit"
          style={{ marginTop: 40 }}
          disabled={anyError || isSubmitted}
        >
          Ingresar
        </Button>
        {errorSubmitMessage && (
          <St.ErrorMessage>{errorSubmitMessage}</St.ErrorMessage>
        )}
        <LinkItem path={'register'} textLeft="Aún no comienzas?">
          Registrate aquí
        </LinkItem>
      </FormLayout>
    </MotionArticle>
  )
}

export default Login
