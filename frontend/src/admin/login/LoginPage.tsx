import { useState } from 'react'
import { useLogin, useNotify } from 'react-admin'
import {
  Box,
  Card,
  CardContent,
  TextField,
  Button,
  Typography,
} from '@mui/material'

export const LoginPage = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const login = useLogin()
  const notify = useNotify()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      await login({ username, password })
    } catch (error: any) {
      notify('ログインに失敗しました', { type: 'error' })
    }
  }

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
        backgroundColor: '#f5f5f5',
      }}
    >
      <Card sx={{ minWidth: 400 }}>
        <CardContent>
          <Typography variant="h5" component="h1" gutterBottom align="center">
            Haiku-Type
          </Typography>
          <Typography variant="body2" color="text.secondary" align="center" sx={{ mb: 3 }}>
            ログイン
          </Typography>
          <form onSubmit={handleSubmit}>
            <TextField
              fullWidth
              label="ユーザー名"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              margin="normal"
              required
            />
            <TextField
              fullWidth
              label="パスワード"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              margin="normal"
              required
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              ログイン
            </Button>
          </form>
        </CardContent>
      </Card>
    </Box>
  )
}
