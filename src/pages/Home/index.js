import { useEffect, useState } from 'react'

// Libs
import axios from 'axios'
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import InputMask from "react-input-mask";

// Components
import { Input } from '../../components/Input'

// Styles
import styles from './styles.module.scss'

// Assets
import illustration from '../../assets/illustration.png'

const schema = yup.object().shape({
  name: yup.string().required('Nome é obrigatório'),
  email: yup.string().required('Email é obrigatório'),
  password: yup.string().required('Senha é obrigatória'),
  cpf: yup.string().required('CPF é obrigatório'),
  birthDate: yup.string().required('Data de nascimento é obrigatória'),
  zipCode: yup.string().required('CEP é obrigatório'),
  number: yup.string().required('Número é obrigatório'),
  address: yup.string().required('Endereço é obrigatório'),
});

export function Home() {
  const { 
    register, 
    handleSubmit, 
    control, 
    formState: { errors }, 
    watch, 
    setValue, 
    clearError, 
    setError 
  } = useForm({
    resolver: yupResolver(schema)
  });

  const data = watch()

  console.log(errors)

  const [searchCepLoading, setSearchCepLoading] = useState(false)

  useEffect(() => {
    console.log(data.zipCode)
      if (data.zipCode) {
        const filteredCep = data.zipCode.replace(/[^a-zA-Z0-9]/g, "",)
        if (filteredCep.length === 8) {
          setSearchCepLoading(true)
          axios.get(`https://viacep.com.br/ws/${filteredCep}/json/`).then(response => {
            if (!response.data.erro) {
              setValue('address', response.data.logradouro)
              setSearchCepLoading(false)
              clearError('cep')
            } else {
              setSearchCepLoading(false)
              setError('cep', {
                type: "manual",
                message: 'CEP não encontrado!'
              })
              setValue('address', '')
            }
          }).catch(error => {
            setSearchCepLoading(false)
          })
        }
      }
  }, [data.zipCode])

  const onSubmit = data => console.log(data);
  return (
    <main className={styles.contentContainer}>
      <section>
        <form 
          onSubmit={handleSubmit(onSubmit)}
          className={styles.formContainer}
        >
          <div className={styles.formWrapper}>
            <Input 
              name="name"
              label="Nome"
              placeholder="Nome completo"
              type="text"
              error={errors.name?.message}
              register={register("name")}
            />
            <Input 
              name="email"
              label="E-mail"
              placeholder="Seu melhor e-mail"
              type="email"
              error={errors.email?.message}
              register={register("email")}
            />
          </div>
          <Input 
            name="password"
            label="Senha"
            placeholder="Senha"
            type="password"
            error={errors.password?.message}
            register={register("password")}
          />
          <Input 
              label="CPF"
              error={errors.cpf?.message}
              ControlledInput={() => 
                <Controller
                control={control}
                name="cpf"
                defaultValue=""
                rules={{ required: true }}
                render={({ field }) => <InputMask mask="999.999.999-99" {...field} />}
                />
              }
            />
          <Input 
            name="birthDate"
            label="Data de aniversário"
            placeholder="Data de aniversário"
            type="date"
            error={errors.birthDate?.message}
            register={register("birthDate")}
          />
          <div className={styles.formWrapper}>
          <Input 
              label="CEP"
              error={errors.zipCode?.message}
              ControlledInput={() => 
                <Controller
                control={control}
                name="zipCode"
                defaultValue=""
                rules={{ required: true }}
                render={({ field }) => <InputMask mask="99999-999" {...field} />}
                />
              }
            />
            <Input 
              name="number"
              label="Número"
              placeholder="Exemplo: 163"
              type="number"
              error={errors.number?.message}
              register={register("number")}
            />            
          </div>
          <Input 
            name="address"
            label="Endereço"
            placeholder="Exemplo: Rua dos faraós"
            type="text"
            error={errors.address?.message}
            register={register("address")}
          />
          <button
            type="submit"
          >
            Registrar-se
          </button>
        </form>
      </section>
      <img src={illustration} alt="Ilustração"/>
    </main>
  )
}