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

const StatsPanel = lazy(() => import('../../../widgets/StatsPanel'))

const Drivers = () => {
  return (
    <>
      <StatsPanel />
      <CRow>
        <CCol sm="5">
          <h4 id="traffic" className="card-title mb-0">Traffic</h4>
          <div className="small text-muted">November 2017</div>
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
          <CNavItem>
            <CNavLink data-tab="messages">
              Messages
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
