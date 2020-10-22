import React, { lazy } from 'react'
import {
  CCard,
  CCardBody,
  CRow,
  CCol,
  CTabs,
  CNav,
  CNavItem,
  CNavLink,
  CTabContent,
  CTabPane
} from '@coreui/react'

import 'devextreme/dist/css/dx.common.css';
import 'devextreme/dist/css/dx.light.css';
import 'devexpress-gantt/dist/dx-gantt.css'
import 'devexpress-diagram/dist/dx-diagram'
import 'devexpress-gantt/dist/dx-gantt'

const WidgetsGantt = lazy(() => import('../../../widgets/WidgetsGantt'))
const StatsPanel = lazy(() => import('../../../widgets/StatsPanel'))

const Drivers = () => {
  return (
    <>
      <StatsPanel />

      <CRow>
        <CCol >
          <WidgetsGantt />
        </CCol>
      </CRow>
      <CCard>
        <CCardBody>

        </CCardBody>
      </CCard>
      <CTabs activeTab="scale">
        <CNav variant="tabs">
          <CNavItem>
            <CNavLink data-tab="scale">
              Escala
            </CNavLink>
          </CNavItem>
          <CNavItem>
            <CNavLink data-tab="worked-hours">
              Horas Trabalhadas
            </CNavLink>
          </CNavItem>
        </CNav>
        <CTabContent>
          <CTabPane data-tab="scale">
            Escala aqui
          </CTabPane>
          <CTabPane data-tab="worked-hours">
            Horas trabalhadas aqui
          </CTabPane>
        </CTabContent>
      </CTabs>
    </>
  )
}

export default Drivers
