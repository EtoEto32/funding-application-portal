import { AuthProvider } from 'react-admin'

// ユーザー情報の型定義
export interface User {
  id: string
  name: string
  role: 'admin' | 'approver'
}

// 簡易的な認証プロバイダー（本番環境では適切な認証実装が必要）
export const authProvider: AuthProvider = {
  login: async ({ username, password }) => {
    try {
      const response = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password }),
      })

      if (!response.ok) {
        throw new Error('認証に失敗しました')
      }

      const { user, token } = await response.json()
      
      // トークンとユーザー情報をローカルストレージに保存
      localStorage.setItem('token', token)
      localStorage.setItem('user', JSON.stringify(user))
      
      return Promise.resolve()
    } catch (error) {
      return Promise.reject(error)
    }
  },

  logout: () => {
    localStorage.removeItem('token')
    localStorage.removeItem('user')
    return Promise.resolve()
  },

  checkAuth: () => {
    const token = localStorage.getItem('token')
    return token ? Promise.resolve() : Promise.reject({ redirectTo: '/login' })
  },

  checkError: (error: any) => {
    const status = error.status
    if (status === 401 || status === 403) {
      localStorage.removeItem('token')
      localStorage.removeItem('user')
      return Promise.reject({ redirectTo: '/login' })
    }
    return Promise.resolve()
  },

  getIdentity: () => {
    const userStr = localStorage.getItem('user')
    if (!userStr) {
      return Promise.reject()
    }
    const user: User = JSON.parse(userStr)
    return Promise.resolve({
      id: user.id,
      fullName: user.name,
      role: user.role,
    })
  },

  getPermissions: () => {
    const userStr = localStorage.getItem('user')
    if (!userStr) {
      return Promise.resolve('')
    }
    const user: User = JSON.parse(userStr)
    return Promise.resolve(user.role)
  },
}
