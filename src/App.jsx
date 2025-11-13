import { useState } from 'react'
import RoleSwitcher from './components/RoleSwitcher'
import Topbar from './components/Topbar'
import StudentDashboard from './components/StudentDashboard'
import TeacherDashboard from './components/TeacherDashboard'
import AdminDashboard from './components/AdminDashboard'

function App() {
  const [role, setRole] = useState('Student')

  return (
    <div className="min-h-screen bg-[var(--color-bg)] text-[var(--text-body)]">
      <Topbar title="Classroom Portal" subtitle="Calm, accessible, and modern" />
      <main className="container-max py-6">
        <div className="section flex items-center justify-between">
          <div>
            <h2 className="mb-1">Welcome</h2>
            <p className="text-gray-600">Choose a role to preview tailored dashboards</p>
          </div>
          <RoleSwitcher onChange={setRole} />
        </div>

        <div className="grid-dashboard">
          {role === 'Student' && <StudentDashboard />}
          {role === 'Teacher' && <TeacherDashboard />}
          {role === 'Admin' && <AdminDashboard />}
        </div>
      </main>
    </div>
  )
}

export default App
