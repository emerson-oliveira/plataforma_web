import React from 'react'
import { CFooter } from '@coreui/react'

const TheFooter = () => {
  return (
    <CFooter fixed={false}>
      <div>
        <a href="https://sstelematica.com.br/" target="_blank" rel="noopener noreferrer">SS Telemática</a>        
        <span className="ml-1">&copy; Copyright 2020 Driver Telematics Tecnologia</span>

      </div>
    </CFooter>
  )
}

export default React.memo(TheFooter)
