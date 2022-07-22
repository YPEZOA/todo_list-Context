import InputForm from '../../components/InputForm/InputForm'
import FormLayout from '../../components/FormLayout/FormLayout'
import Button from '../../components/Button/Button'
import Icona from '../../components/Icon/Icon'
import Image from '../../components/Image/Image'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import tasksIcon from '../../assets/images/tasks-icon.png'
import MotionArticle from '../../components/MotionArticle/MotionArticle'
import { useFormik } from 'formik'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import * as St from './Register.styled'
import * as Yup from 'yup'

const Register = () => {
  const [isRegistered, setIsRegistered] = useState(false)
  const navigate = useNavigate()
  const BASE_URL = 'http://localhost:8080/api'

  const validateRegisterFields = Yup.object().shape({
    user: Yup.string()
      .matches(/^[a-zA-Z]+$/, 'Carácteres no válidos')
      .min(3, 'Debe contener más de 3 carácteres')
      .max(10, 'Máximo de carácteres permitidos')
      .required('Nombre de usuario requerido'),
    email: Yup.string().email().required('El correo es requerido'),
    password: Yup.string()
      .min(6, 'Debe contener 6 o más carácteres')
      .required('Contraseña requerida'),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('password'), null], 'Contraseñas no coinciden')
      .required('Por favor, confirma tu contraseña')
  })

  const onHandleSubmit = (user, email, password) => {
    const options = {
      method: 'POST',
      body: JSON.stringify({
        user,
        email,
        password
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    }
    fetch(`${BASE_URL}/user/register`, options)
      .then(response => response.json())
      .then(resp => {
        if (resp.status === 200) {
          setIsRegistered(true)
          navigate('/auth/login')
        }
      })
      .catch(err => console.error(err))
    setIsRegistered(false)
  }

  const formik = useFormik({
    initialValues: {
      user: '',
      email: '',
      password: '',
      confirmPassword: ''
    },
    validationSchema: validateRegisterFields,
    validateOnBlur: true,
    onSubmit: ({ user, email, password }) => {
      onHandleSubmit(user, email, password)
    }
  })

  const { errors, touched } = formik
  const anyError = errors.user || errors.password

  return (
    <MotionArticle>
      <Image url={tasksIcon} alt="tasks" width="60" style={{ marginTop: 30 }} />
      <FormLayout onSubmit={formik.handleSubmit}>
        <a
          href="login"
          style={{
            textDecoration: 'none',
            color: 'lightgray'
          }}
        >
          <Icona
            iconType={faArrowLeft}
            style={{
              color: 'lightblue',
              cursor: 'pointer',
              fontSize: 20,
              paddingRight: 10
            }}
          />
          Volver
        </a>
        <InputForm
          type="text"
          name="user"
          value={formik.values.user}
          onChange={formik.handleChange}
          placeholder="Ingresa un nombre de usuario"
          label={'Usuario'}
          autocomplete="off"
        />
        {errors.user && touched.user && (
          <St.ErrorMessage>{errors.user}</St.ErrorMessage>
        )}
        <InputForm
          type="email"
          name="email"
          placeholder="Ej: holamundo@mundo.com"
          value={formik.values.email}
          onChange={formik.handleChange}
          label={'Email'}
          autocomplete="off"
        />
        {errors.email && touched.email && (
          <St.ErrorMessage>{errors.email}</St.ErrorMessage>
        )}
        <InputForm
          type="password"
          name="password"
          placeholder="Debe contener 6 o más carácteres"
          value={formik.values.password}
          onChange={formik.handleChange}
          label={'Contraseña'}
          autocomplete="off"
        />
        {errors.password && touched.password && (
          <St.ErrorMessage>{errors.password}</St.ErrorMessage>
        )}
        <InputForm
          type="password"
          name="confirmPassword"
          placeholder="Repite la contraseña"
          value={formik.values.confirmPassword}
          onChange={formik.handleChange}
          label={'Confirmar constraseña'}
          autocomplete="off"
        />
        {errors.confirmPassword && touched.confirmPassword && (
          <St.ErrorMessage>{errors.confirmPassword}</St.ErrorMessage>
        )}
        <Button style={{ marginTop: 50 }} type="submit" disabled={anyError}>
          Registrarse
        </Button>
      </FormLayout>
    </MotionArticle>
  )
}

export default Register
