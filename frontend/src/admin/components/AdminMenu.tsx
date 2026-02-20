import { Menu } from 'react-admin'
import { usePermissions } from 'react-admin'
import CheckCircleIcon from '@mui/icons-material/CheckCircle'
import SettingsIcon from '@mui/icons-material/Settings'

export const AdminMenu = () => {
  const { permissions } = usePermissions()

  return (
    <Menu>
      <Menu.DashboardItem />
      {/* 承認者機能（全員がアクセス可能） */}
      <Menu.Item
        to="/approvals"
        primaryText="承認待ち"
        leftIcon={<CheckCircleIcon />}
      />
      {/* 管理者のみアクセス可能なメニュー項目 */}
      {permissions === 'admin' && (
        <>
          <Menu.Item
            to="/settings"
            primaryText="設定"
            leftIcon={<SettingsIcon />}
          />
        </>
      )}
    </Menu>
  )
}
