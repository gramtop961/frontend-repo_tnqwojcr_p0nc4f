import { useMemo } from 'react'

function CircularProgress({ value = 72 }) {
  const size = 140
  const stroke = 10
  const radius = (size - stroke) / 2
  const circumference = 2 * Math.PI * radius
  const dash = useMemo(() => `${(value / 100) * circumference} ${circumference}`, [value, circumference])
  return (
    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} aria-label={`Attendance ${value}%`}>
      <circle cx={size/2} cy={size/2} r={radius} stroke="#E5E7EB" strokeWidth={stroke} fill="none" />
      <circle cx={size/2} cy={size/2} r={radius} stroke="var(--color-primary)" strokeWidth={stroke} fill="none" strokeLinecap="round" strokeDasharray={dash} transform={`rotate(-90 ${size/2} ${size/2})`} />
      <text x="50%" y="50%" dominantBaseline="middle" textAnchor="middle" fontSize="28" fontWeight="700" fill="var(--text-heading)">{value}%</text>
    </svg>
  )
}

export default function StudentDashboard() {
  return (
    <div className="container-max py-6">
      <div className="card hoverable text-center">
        <p className="text-sm text-gray-500 mb-2">Welcome back,</p>
        <h2 className="mb-4">Alex Johnson</h2>
        <div className="flex items-center justify-center">
          <CircularProgress value={92} />
        </div>
        <p className="mt-4 text-gray-600">Attendance this month</p>
        <div className="mt-6 grid sm:grid-cols-3 gap-4">
          <div className="card">
            <div className="text-2xl font-semibold text-[var(--text-heading)]">4</div>
            <p className="text-sm text-gray-500">Assignments Due</p>
          </div>
          <div className="card">
            <div className="text-2xl font-semibold text-[var(--text-heading)]">A-</div>
            <p className="text-sm text-gray-500">Average Grade</p>
          </div>
          <div className="card">
            <div className="text-2xl font-semibold text-[var(--text-heading)]">2</div>
            <p className="text-sm text-gray-500">Messages</p>
          </div>
        </div>
      </div>
    </div>
  )
}
