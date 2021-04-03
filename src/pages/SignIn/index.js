// Libs
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";


// Components
import { Input } from '../../components/Input'

// Styles
import styles from './styles.module.scss'

const schema = yup.object().shape({
  email: yup.string().required('Email é obrigatório'),
  password: yup.string().required('Senha é obrigatória'),
});

export function SignIn() {
  document.title = 'Entrar | Todo'

  const { 
    register, 
    handleSubmit, 
    formState: { errors }, 
  } = useForm({
    resolver: yupResolver(schema)
  });

  const onSubmit = (data) => console.log(data)

  return (
    <main className={styles.container}>
      <form 
        onSubmit={handleSubmit(onSubmit)}
        className={styles.formContainer}
      >
        <Input 
          name="email"
          label="E-mail"
          placeholder="Digite seu e-mail"
          type="text"
          error={errors.email?.message}
          register={register("email")} 
        />
        <Input 
          name="password"
          label="Senha"
          placeholder="Digite sua senha"
          type="password"
          error={errors.password?.message}
          register={register("password")} 
        />
        <button type="submit">
          Entrar
        </button>
      </form>
    </main>
  )
}