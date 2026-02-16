import { Admin, CustomRoutes } from 'react-admin'
import { Route } from 'react-router-dom'
import { dataProvider } from './dataProvider'
import { authProvider } from './authProvider'
import { AdminLayout } from './layouts/AdminLayout'
import { ApproverLayout } from './layouts/ApproverLayout'
import { AdminDashboard } from './pages/AdminDashboard'
import { ApproverDashboard } from './pages/ApproverDashboard'
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
      <CustomRoutes>
        {/* 承認者用ページへのルート */}
        <Route path="/approver" element={<ApproverLayout />}>
          <Route index element={<ApproverDashboard />} />
        </Route>
      </CustomRoutes>
    </Admin>
  )
}
