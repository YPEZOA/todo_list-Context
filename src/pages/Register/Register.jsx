import InputForm from '../../components/InputForm/InputForm'
import FormLayout from '../../components/FormLayout/FormLayout'
import Button from '../../components/Button/Button'
import Icona from '../../components/Icon/Icon'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import MotionArticle from '../../components/MotionArticle/MotionArticle'

const Register = () => {
  return (
    <MotionArticle>
      <FormLayout title={'Registrate para crear tus tareas'}>
        <a href="login">
          <Icona
            iconType={faArrowLeft}
            style={{
              color: 'lightblue',
              cursor: 'pointer',
              fontSize: 20,
              paddingBottom: 20
            }}
          />
        </a>
        <InputForm
          type="text"
          placeholder="Nombre y apellido"
          label={'Nombre'}
        />
        <InputForm
          type="text"
          placeholder="Ingresa un nombre de usuario"
          label={'Usuario'}
        />
        <InputForm
          type="email"
          placeholder="Ej: holamundo@mundo.com"
          label={'Email'}
        />
        <InputForm
          type="password"
          placeholder="Debe contener 6 o más carácteres"
          label={'Contraseña'}
        />
        <InputForm
          type="email"
          placeholder="Confirmar contraseña"
          label={'Contraseña'}
        />
        <Button style={{ marginTop: 10 }} type="submit">
          Registrarse
        </Button>
      </FormLayout>
    </MotionArticle>
  )
}

export default Register
