import React from 'react'

export  function ReportItem({report, toggleReport}) {
    const { id, task, completed: viewed } = report

    const reportClick = () => {
        toggleReport(id);
    };

  return (
    <li>
        {task}
        <input type='checkbox' checked={viewed} onChange={reportClick} />
    
    </li>
  )
}
