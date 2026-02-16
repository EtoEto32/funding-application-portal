import { Layout, LayoutProps } from 'react-admin'
import { AdminAppBar } from '../components/AdminAppBar'
import { AdminMenu } from '../components/AdminMenu'

export const AdminLayout = (props: LayoutProps) => (
  <Layout {...props} appBar={AdminAppBar} menu={AdminMenu} />
)
