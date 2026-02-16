import { Menu } from 'react-admin'
import DashboardIcon from '@mui/icons-material/Dashboard'
import CheckCircleIcon from '@mui/icons-material/CheckCircle'

export const ApproverMenu = () => (
  <Menu>
    <Menu.Item
      to="/approver"
      primaryText="ダッシュボード"
      leftIcon={<DashboardIcon />}
    />
    <Menu.Item
      to="/approver/approvals"
      primaryText="承認待ち"
      leftIcon={<CheckCircleIcon />}
    />
  </Menu>
)
