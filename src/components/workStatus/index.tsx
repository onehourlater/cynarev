import React, { useState, useEffect } from "react"


const WorkStatus = ({ align }: { align: string }) => {
  const [state, setState] = useState({
    'title': 'Ищу новый проект или работу',
  })

  return (
    <div className={`work-status work-status-align-${align} mb-40`}>
      <div className="work-status__c">
        <div className="online-circle-c"></div> 
        { state.title }
      </div>
    </div>
  )
}
export default WorkStatus