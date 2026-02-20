import { AppBar, TitlePortal } from 'react-admin'
import { Typography } from '@mui/material'

export const AdminAppBar = () => (
  <AppBar>
    <TitlePortal>
      <Typography variant="h6" id="react-admin-title">
        Haiku-Type
      </Typography>
    </TitlePortal>
  </AppBar>
)
