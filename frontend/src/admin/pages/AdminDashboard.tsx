import { Card, CardContent, Typography, Box } from '@mui/material'
import { useTitle } from 'react-admin'

export const AdminDashboard = () => {
  useTitle('管理者ダッシュボード')

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" gutterBottom>
        管理者ダッシュボード
      </Typography>
      <Box sx={{ display: 'flex', gap: 2, mt: 3 }}>
        <Card sx={{ minWidth: 275 }}>
          <CardContent>
            <Typography variant="h6" component="div">
              申請管理
            </Typography>
            <Typography variant="body2" color="text.secondary">
              研究費申請の一覧と管理を行います
            </Typography>
          </CardContent>
        </Card>
        <Card sx={{ minWidth: 275 }}>
          <CardContent>
            <Typography variant="h6" component="div">
              ユーザー管理
            </Typography>
            <Typography variant="body2" color="text.secondary">
              ユーザーアカウントの管理を行います
            </Typography>
          </CardContent>
        </Card>
      </Box>
    </Box>
  )
}
