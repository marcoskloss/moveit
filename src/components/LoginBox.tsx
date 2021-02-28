import Link from 'next/link'

import styles from '../styles/components/LoginBox.module.css'

export function LoginBox() {
  return (
    <div className={styles.loginContainer}>
      <input type="text" placeholder="Digite seu username" />
      <Link href='/challenges'>
        <button type="button">
          <img src="/icons/arrow-right.svg" alt="Logar" />
        </button>
      </Link>
    </div>
  )
}