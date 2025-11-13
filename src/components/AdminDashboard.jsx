import { useState } from 'react'

function SortIcon({ dir }) {
  return <span aria-hidden className="ml-1 text-gray-400">{dir === 'asc' ? '▲' : '▼'}</span>
}

export default function AdminDashboard() {
  const [sort, setSort] = useState({ key: 'name', dir: 'asc' })
  const data = [
    { name: 'Alex Johnson', grade: 'A-', attendance: '92%' },
    { name: 'Maryann Lee', grade: 'B+', attendance: '88%' },
    { name: 'Jordan Park', grade: 'A', attendance: '97%' },
    { name: 'Samir Patel', grade: 'B', attendance: '82%' },
  ]
  const sorted = [...data].sort((a,b)=>{
    const v1 = a[sort.key]
    const v2 = b[sort.key]
    return sort.dir === 'asc' ? String(v1).localeCompare(String(v2)) : String(v2).localeCompare(String(v1))
  })

  const toggleSort = (key) => {
    setSort(s => s.key === key ? { key, dir: s.dir === 'asc' ? 'desc' : 'asc' } : { key, dir: 'asc' })
  }

  return (
    <div className="container-max py-6">
      <nav className="breadcrumb mb-4" aria-label="Breadcrumb">
        <a href="#">Settings</a> / <a href="#">Classes</a> / <span aria-current="page">Attendance</span>
      </nav>

      <div className="card">
        <div className="flex items-center justify-between mb-4">
          <h2>Students</h2>
          <button className="btn btn-danger">Reset Data</button>
        </div>

        <div className="overflow-auto max-h-[50vh] rounded-lg border">
          <table className="table" role="table" aria-label="Students table with sortable headers and zebra striping">
            <thead>
              <tr>
                <th className="sortable" onClick={()=>toggleSort('name')}>Name {sort.key==='name' && <SortIcon dir={sort.dir} />}</th>
                <th className="sortable" onClick={()=>toggleSort('grade')}>Grade {sort.key==='grade' && <SortIcon dir={sort.dir} />}</th>
                <th className="sortable" onClick={()=>toggleSort('attendance')}>Attendance {sort.key==='attendance' && <SortIcon dir={sort.dir} />}</th>
              </tr>
            </thead>
            <tbody>
              {sorted.map((row, idx) => (
                <tr key={idx}>
                  <td>{row.name}</td>
                  <td>{row.grade}</td>
                  <td>{row.attendance}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="sticky-actions mt-4">
          <button className="btn btn-secondary">Export</button>
          <button className="btn btn-primary">Save Changes</button>
        </div>
      </div>
    </div>
  )
}
