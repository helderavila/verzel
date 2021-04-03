import styles from './styles.module.scss'

import { useHistory } from 'react-router-dom'

export function SignInButton() {
  const history = useHistory()

  return (
    <button
      type="button"
      className={styles.signInButton}
      onClick={() => history.push('/signin')}
    >
      Entrar
    </button>
  )
}