import { LoginBox } from '../components/LoginBox'

import styles from '../styles/pages/Home.module.css'

export default function Home() {

  return (
    <div className={styles.container}>
      <img src="/background-image.png" />
      <section>
        <img src="/logo-full.svg" alt="Move it" />

        <h1>Bem-vindo</h1>
        <div>
          <img src="/icons/Github.svg" alt="Github" />
          <span>Entre com seu Github para começar.</span>
        </div>
        <LoginBox />
      </section>
    </div>
  )
}