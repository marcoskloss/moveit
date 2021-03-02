import { createContext, ReactNode, useState } from "react";

interface ProfileContextData {
  username: string
  addUsername: (user: string) => void
  avatarUrl: string
  getGithubUserInformation: () => void
}

interface ProfileContextProps {
  children: ReactNode
}

export const ProfileContext = createContext({} as ProfileContextData)

export function ProfileProvider({ children }: ProfileContextProps) {
  const [username, setUsername] = useState("")
  const [avatarUrl, setAvatarUrl] = useState("")

  function addUsername(user: string) {
    setUsername(user)
  }

  async function getGithubUserInformation() {
    try {
      const response = await fetch(`https://api.github.com/users/${username}`)
      const data = await response.json()
      setAvatarUrl(data.avatar_url)
    }
    catch (e) {
      console.log(e);
    }
  }

  return (
    <ProfileContext.Provider
      value={{
        username,
        avatarUrl,
        addUsername,
        getGithubUserInformation,
      }}
    >
      {children}
    </ProfileContext.Provider>
  )
}