import styles from './styles.module.scss'

import { SignInButton } from '../SignInButton'

export function Header() {
  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerContent}>
        <h1>todo<span>.</span></h1>
        <SignInButton />
      </div>
    </header>
  )
}