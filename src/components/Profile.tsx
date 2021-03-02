import { useContext } from 'react'
import { ChallengesContext } from '../contexts/ChallengesContexts'
import { ProfileContext } from '../contexts/ProfileContext'
import styles from '../styles/components/Profile.module.css'

export function Profile() {
  const { level } = useContext(ChallengesContext)
  const { avatarUrl, username } = useContext(ProfileContext)

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