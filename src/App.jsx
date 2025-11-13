import { useState } from 'react'
import RoleSwitcher from './components/RoleSwitcher'
import Topbar from './components/Topbar'
import StudentDashboard from './components/StudentDashboard'
import TeacherDashboard from './components/TeacherDashboard'
import AdminDashboard from './components/AdminDashboard'
import PortalLanding from './components/PortalLanding'

function App() {
  const [role, setRole] = useState('')

  return (
    <div className="min-h-screen bg-[var(--color-bg)] text-[var(--text-body)]">
      <Topbar title="Classroom Portal" subtitle="Warm, professional, and accessible" />

      {!role && (
        <PortalLanding onSelectRole={setRole} />
      )}

      {role && (
        <main className="container-max py-6">
          <div className="section flex items-center justify-between">
            <div>
              <h2 className="mb-1">Welcome</h2>
              <p className="text-gray-600">You are viewing the {role} dashboard</p>
            </div>
            <RoleSwitcher onChange={setRole} />
          </div>

          <div className="grid-dashboard">
            {role === 'Student' && <StudentDashboard />}
            {role === 'Teacher' && <TeacherDashboard />}
            {role === 'Admin' && <AdminDashboard />}
          </div>
        </main>
      )}
    </div>
  )
}

export default App
