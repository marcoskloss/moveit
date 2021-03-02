import { addBasePath } from 'next/dist/next-server/lib/router/router'
import { useContext } from 'react'
import { ChallengesContext } from '../contexts/ChallengesContexts'
import { ProfileContext } from '../contexts/ProfileContext'
import styles from '../styles/components/Profile.module.css'

export function Profile() {
  const { level } = useContext(ChallengesContext)
  let { avatarUrl, username } = useContext(ProfileContext)

  if (!username) username = 'Usuário'
  if (!avatarUrl) avatarUrl = 'https://github.com/vercel.png'

  return (
    <div className={styles.profileContainer}>
      <img src={avatarUrl} alt="User" />
      <div>
        <strong>{username}</strong>
        <p>
          <img src="icons/level.svg" alt="Level" />
          Level {level}
        </p>
      </div>
    </div>
  )
}