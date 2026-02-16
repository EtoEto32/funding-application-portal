import { AppBar, TitlePortal } from 'react-admin'
import { Typography } from '@mui/material'

export const ApproverAppBar = () => (
  <AppBar>
    <TitlePortal>
      <Typography variant="h6" id="react-admin-title">
        研究費申請システム - 承認者
      </Typography>
    </TitlePortal>
  </AppBar>
)
