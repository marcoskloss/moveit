import Link from 'next/link'
import { useContext } from 'react'
import { ProfileContext } from '../contexts/ProfileContext'

import styles from '../styles/components/LoginBox.module.css'

export function LoginBox() {
  const { addUsername, getGithubUserInformation } = useContext(ProfileContext)

  function handleChange(e) {
    const inputValue = e.target.value
    addUsername(inputValue)
  }

  return (
    <div className={styles.loginContainer}>

      <input
        type="text"
        placeholder="Digite seu username"
        onChange={handleChange}
      />

      <Link href='/challenges'>
        <button type="button" onClick={getGithubUserInformation}>
          <img src="/icons/arrow-right.svg" alt="Logar" />
        </button>
      </Link>

    </div>
  )
}