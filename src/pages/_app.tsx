import { ProfileProvider } from '../contexts/ProfileContext'
import '../styles/global.css'

function MyApp({ Component, pageProps }) {
  return (
    <ProfileProvider>
      <Component {...pageProps} />
    </ProfileProvider>
  )
}

export default MyApp
