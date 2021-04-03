import { useHistory } from 'react-router-dom'

import styles from './styles.module.scss'

import { SignInButton } from '../SignInButton'

export function Header() {
  const history = useHistory()

  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerContent}>
        <h1 onClick={() => history.push('/')}>todo<span>.</span></h1>
        <SignInButton />
      </div>
    </header>
  )
}