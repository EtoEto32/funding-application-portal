import { AppBar, TitlePortal } from 'react-admin'
import { Typography } from '@mui/material'

export const ApproverAppBar = () => (
  <AppBar>
    <TitlePortal>
      <Typography variant="h6" id="react-admin-title">
        Haiku-Type - 承認者
      </Typography>
    </TitlePortal>
  </AppBar>
)
