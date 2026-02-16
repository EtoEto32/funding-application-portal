import { Menu } from 'react-admin'
import { usePermissions } from 'react-admin'

export const AdminMenu = () => {
  const { permissions } = usePermissions()

  return (
    <Menu>
      <Menu.DashboardItem />
      {/* 管理者のみアクセス可能なメニュー項目を追加 */}
      {permissions === 'admin' && (
        <>
          <Menu.Item
            to="/admin/settings"
            primaryText="設定"
          />
        </>
      )}
    </Menu>
  )
}
