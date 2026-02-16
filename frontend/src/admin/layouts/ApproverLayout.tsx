import { Layout, LayoutProps } from 'react-admin'
import { ApproverAppBar } from '../components/ApproverAppBar'
import { ApproverMenu } from '../components/ApproverMenu'

export const ApproverLayout = (props: LayoutProps) => (
  <Layout {...props} appBar={ApproverAppBar} menu={ApproverMenu} />
)
