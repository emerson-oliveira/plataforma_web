import React, { lazy } from 'react'
import {
  CTabs,
  CNav,
  CNavItem,
  CNavLink,
  CTabContent,
  CTabPane
} from '@coreui/react'

import 'devextreme/dist/css/dx.common.css';
import 'devextreme/dist/css/dx.light.css';
import 'devexpress-gantt/dist/dx-gantt.css';


const WidgetsGantt = lazy(() => import('../../../widgets/WidgetsGantt'))
const StatsPanel = lazy(() => import('../../../widgets/StatsPanel'))

const Drivers = () => {

  return (
    <div id="page-drivers">
        <CTabs activeTab="drivers">
        <CNav variant="tabs" className="mb-4">
          <CNavItem>
            <CNavLink data-tab="drivers">
              Motoristas
            </CNavLink>
          </CNavItem>
          <CNavItem>
            <CNavLink data-tab="vehicles">
              Veiculos
            </CNavLink>
          </CNavItem>
        </CNav>

        <CTabContent>
          <CTabPane data-tab="drivers">
            <StatsPanel />
          </CTabPane>
          <CTabPane data-tab="vehicles">
            <StatsPanel />
          </CTabPane>
        </CTabContent>
      </CTabs>


      <CTabs activeTab="scale">
        <CNav variant="tabs" className="mb-4">
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
            <WidgetsGantt />
          </CTabPane>
          <CTabPane data-tab="worked-hours">
          </CTabPane>
        </CTabContent>
      </CTabs>

    </div>
  )
}

export default Drivers
