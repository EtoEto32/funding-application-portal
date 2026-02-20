import { Admin } from 'react-admin'
import { dataProvider } from './dataProvider'
import { authProvider } from './authProvider'
import { AdminLayout } from './layouts/AdminLayout'
import { AdminDashboard } from './pages/AdminDashboard'
import { LoginPage } from './login/LoginPage'

export const AdminApp = () => {
  return (
    <Admin
      dataProvider={dataProvider}
      authProvider={authProvider}
      layout={AdminLayout}
      dashboard={AdminDashboard}
      loginPage={LoginPage}
    >
    </Admin>
  )
}
