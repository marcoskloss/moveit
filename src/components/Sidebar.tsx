import styles from '../styles/components/Sidebar.module.css'

export function Sidebar() {
  return (
    <div className={styles.sidebar}>
      <img src="/icons/Logo.svg" />

      <nav>
        <ul>
          <li className={styles.active} >
            <img src="/icons/home.svg" alt="Home" />
          </li>
        </ul>
      </nav>
    </div>
  )
}