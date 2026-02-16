import { AppBar, TitlePortal } from 'react-admin'
import { Typography } from '@mui/material'

export const AdminAppBar = () => (
  <AppBar>
    <TitlePortal>
      <Typography variant="h6" id="react-admin-title">
        研究費申請システム - 管理者
      </Typography>
    </TitlePortal>
  </AppBar>
)
