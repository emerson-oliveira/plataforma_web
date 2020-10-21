import React, { lazy } from 'react'
import { CCard, CCardBody } from '@coreui/react'

import WidgetScheduler from '../../../views/widgets/WidgetScheduler'

const StatsPanel = lazy(() => import('../../../views/widgets/StatsPanel'))

const Timesheet = () => {
  return (
    <>
      <StatsPanel />
      <CCard>
        <CCardBody>
          <WidgetScheduler style={{height: '300px', marginTop: '40px', width: '100%'}}/>
        </CCardBody>
      </CCard>
    </>
  )
}

export default Timesheet
