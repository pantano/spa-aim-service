import React from 'react'
import { ReportItem } from './ReportItem'

export function ReportList({ reports, toggleReport }) {
  return (
    <ul>
        {reports.map((report) => (
            <ReportItem key={report.id} report={report} toggleReport={toggleReport}/>
        ))}
    </ul>
  )
}
