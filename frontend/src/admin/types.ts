// 共通型定義

export interface Application {
  id: string
  title: string
  applicant: string
  amount: number
  status: 'pending' | 'approved' | 'rejected'
  createdAt: string
  updatedAt: string
}

export interface User {
  id: string
  name: string
  role: 'admin' | 'approver'
}
