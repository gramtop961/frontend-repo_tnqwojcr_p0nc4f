import { useState } from 'react'

export default function RoleSwitcher({ onChange }) {
  const [role, setRole] = useState('Student')
  const roles = ['Admin', 'Teacher', 'Student']

  const handleChange = (r) => {
    setRole(r)
    onChange?.(r)
  }

  return (
    <div className="flex items-center gap-2 bg-white rounded-lg p-1 shadow-sm" role="tablist" aria-label="Role Switcher">
      {roles.map((r) => (
        <button
          key={r}
          role="tab"
          aria-selected={role === r}
          aria-label={`Switch to ${r} view`}
          onClick={() => handleChange(r)}
          className={`btn ${role === r ? 'btn-primary' : 'btn-secondary'}`}
          style={{ height: 36 }}
        >
          {r}
        </button>
      ))}
    </div>
  )
}
