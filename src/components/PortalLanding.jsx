import React from 'react'

export default function PortalLanding({ onSelectRole }) {
  return (
    <section className="container-max py-12">
      <div className="text-center mb-10">
        <div className="inline-flex items-center gap-3 mb-3">
          <div className="w-10 h-10 rounded-full flex items-center justify-center bg-[var(--color-primary)] text-white" aria-hidden>🌞</div>
          <span className="text-[var(--color-primary)] font-semibold text-lg">Sunshine Worldwide School</span>
        </div>
        <h1 className="mb-2">Classroom Portal</h1>
        <p className="text-[var(--text-secondary)] max-w-2xl mx-auto">Choose your portal to continue. A warm, focused experience designed with accessibility and clarity.</p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <article className="card hoverable portal-card" aria-labelledby="teacher-title">
          <div className="flex flex-col items-center text-center h-full">
            <div className="role-icon" aria-hidden>👩‍🏫</div>
            <h3 id="teacher-title" className="mt-3">Teacher Portal</h3>
            <p className="mt-2 text-[var(--text-secondary)]">Manage attendance, assignments, and class insights efficiently.</p>
            <div className="mt-auto pt-6">
              <button className="btn btn-primary" onClick={()=>onSelectRole('Teacher')}>Enter</button>
            </div>
          </div>
        </article>

        <article className="card hoverable portal-card" aria-labelledby="student-title">
          <div className="flex flex-col items-center text-center h-full">
            <div className="role-icon role-icon--amber" aria-hidden>👨‍🎓</div>
            <h3 id="student-title" className="mt-3">Student Portal</h3>
            <p className="mt-2 text-[var(--text-secondary)]">Track attendance, assignments, and progress in one place.</p>
            <div className="mt-auto pt-6">
              <button className="btn btn-amber" onClick={()=>onSelectRole('Student')}>Enter</button>
            </div>
          </div>
        </article>

        <article className="card hoverable portal-card" aria-labelledby="admin-title">
          <div className="flex flex-col items-center text-center h-full">
            <div className="role-icon role-icon--dark" aria-hidden>⚙️</div>
            <h3 id="admin-title" className="mt-3">Admin Portal</h3>
            <p className="mt-2 text-[var(--text-secondary)]">Oversee users, classes, and system settings securely.</p>
            <div className="mt-auto pt-6">
              <button className="btn btn-danger" onClick={()=>onSelectRole('Admin')}>Admin Login</button>
            </div>
          </div>
        </article>
      </div>
    </section>
  )
}
