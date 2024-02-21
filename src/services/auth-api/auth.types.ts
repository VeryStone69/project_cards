export type UserResponse = {
  avatar: null | string
  created: string
  email: string
  id: string
  isEmailVerified: boolean
  name: string
  updated: string
}

export type LoginData = {
  email: string
  password: string
  rememberMe?: boolean
}

export type LoginResponse = {
  accessToken: string
}

export type UpdateProfile = FormData

export type RegisterData = Omit<LoginData, 'rememberMe'>
