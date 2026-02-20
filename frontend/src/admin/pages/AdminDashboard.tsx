import { Card, CardContent, Typography, Box } from '@mui/material'
import { usePermissions } from 'react-admin'

export const AdminDashboard = () => {
  const { permissions } = usePermissions()
  const isAdmin = permissions === 'admin'

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" gutterBottom>
        {isAdmin ? '管理者ダッシュボード' : '承認者ダッシュボード'}
      </Typography>
      <Box sx={{ display: 'flex', gap: 2, mt: 3 }}>
        {/* 承認者機能（全員がアクセス可能） */}
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
        {/* 管理者のみ表示 */}
        {isAdmin && (
          <>
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
          </>
        )}
      </Box>
    </Box>
  )
}
