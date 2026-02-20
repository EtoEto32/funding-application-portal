import { Card, CardContent, Typography, Box } from '@mui/material'

export const ApproverDashboard = () => {
  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" gutterBottom>
        承認者ダッシュボード
      </Typography>
      <Box sx={{ display: 'flex', gap: 2, mt: 3 }}>
        <Card sx={{ minWidth: 275 }}>
          <CardContent>
            <Typography variant="h6" component="div">
              承認待ち申請
            </Typography>
            <Typography variant="body2" color="text.secondary">
              承認が必要な申請を確認・承認します
            </Typography>
          </CardContent>
        </Card>
        <Card sx={{ minWidth: 275 }}>
          <CardContent>
            <Typography variant="h6" component="div">
              承認履歴
            </Typography>
            <Typography variant="body2" color="text.secondary">
              過去の承認履歴を確認します
            </Typography>
          </CardContent>
        </Card>
      </Box>
    </Box>
  )
}
