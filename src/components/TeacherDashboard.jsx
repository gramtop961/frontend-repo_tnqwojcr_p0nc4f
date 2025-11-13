import { useState } from 'react'

export default function TeacherDashboard() {
  const [query, setQuery] = useState('')
  const students = ['Alex Johnson', 'Maryann Lee', 'Jordan Park', 'Samir Patel', 'Priya Sharma']
  const filtered = students.filter(s => s.toLowerCase().includes(query.toLowerCase()))

  return (
    <div className="container-max py-6">
      <div className="card">
        <div className="sticky top-16 -mt-6 -mx-6 px-6 pt-6 pb-3 bg-[var(--color-surface)] border-b" role="region" aria-label="Student Picker">
          <div className="flex items-center gap-2">
            <input className="form-input" placeholder="Search students..." value={query} onChange={e=>setQuery(e.target.value)} />
            <button className="btn btn-secondary" aria-label="Clear search" onClick={()=>setQuery('')}>Clear</button>
          </div>
          <small className="mt-1 block">{filtered.length} shown</small>
        </div>

        <div className="mt-4 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filtered.map(name => (
            <label key={name} className="card hoverable flex items-center gap-3 cursor-pointer">
              <input type="checkbox" className="w-5 h-5" aria-label={`Select ${name}`} />
              <div>
                <div className="font-medium text-[var(--text-heading)]">{name}</div>
                <small className="text-gray-500">Present today</small>
              </div>
            </label>
          ))}
        </div>

        <div className="sticky-actions mt-6">
          <span className="mr-auto text-sm" aria-live="polite">5 students selected</span>
          <button className="btn btn-secondary">Mark Late</button>
          <button className="btn btn-primary">Mark Present</button>
        </div>
      </div>
    </div>
  )
}
