import { Header } from '../components/header'
import { EmployeeForm } from '../components/employeeForm'

export function Home() {
  return (
    <>
      <Header title='HRnet' linkLabel='View Current Employees' linkPath='/employees' />
      <EmployeeForm />
    </>
  )
}
