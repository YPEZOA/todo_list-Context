import useForm from '../../hooks/useForm'
import FormLayout from '../../components/FormLayout/FormLayout'
import InputForm from '../../components/InputForm/InputForm'
import Button from '../../components/Button/Button'
import LinkItem from '../../components/LinkItem/LinkItem'
import tasksIcon from '../../assets/images/tasks-icon.png'
import Image from '../../components/Image/Image'
import { useNavigate } from 'react-router-dom'

const Login = () => {
  const navigate = useNavigate()
  const { values, handleOnChange } = useForm({
    user: '',
    password: ''
  })

  // DataTasks here
  const { user, password } = values

  const handleSubmit = e => {
    e.preventDefault()
    const userData = { currentUser: user, userTasks: [] }
    localStorage.setItem('userData', JSON.stringify(userData))
    navigate('/user/home')
  }

  return (
    <div style={{ marginTop: 40 }}>
      <Image
        url={tasksIcon}
        alt="tasks"
        width="110"
        style={{ paddingBottom: 20 }}
      />
      <FormLayout onHandleSubmit={handleSubmit} title="Bienvenido.">
        <InputForm
          name="user"
          label="Usuario"
          type="text"
          id="name"
          value={user}
          onChange={handleOnChange}
        />
        <InputForm
          name="password"
          label="Contraseña"
          type="password"
          id="email"
          value={password}
          onChange={handleOnChange}
        />
        <Button type="submit" style={{ marginTop: 40 }}>
          Ingresar
        </Button>
        <LinkItem path={'register'} textLeft="Aún no comienzas?">
          Registrate aquí
        </LinkItem>
      </FormLayout>
    </div>
  )
}

export default Login
