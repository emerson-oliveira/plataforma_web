import React from 'react'
import {
  CWidgetDropdown,
  CRow,
  CCol,
  CDropdown,
  CDropdownMenu,
  CDropdownItem,
  CDropdownToggle
} from '@coreui/react'

import CIcon from '@coreui/icons-react'
import ChartLineSimple from '../charts/ChartLineSimple'

import 'devextreme/dist/css/dx.common.css';
import 'devextreme/dist/css/dx.light.css';

const StatsPanel = () => {
  // render
  return (
    <CRow>
      <CCol sm="6" lg="3">
        <CWidgetDropdown
          color="gradient-info"
          header="87/95"
          text="Motoristas Escalado"
          footerSlot={
            <ChartLineSimple
              pointed
              className="c-chart-wrapper mt-3 mx-3"
              style={{height: '70px'}}
              dataPoints={[86, 83, 84, 80, 92, 90, 87]}
              pointHoverBackgroundColor="info"
              label="Motorista"
              labels="months"
            />
          }
        >
          <CDropdown>
            <CDropdownToggle color="transparent">
              <CIcon name="cil-settings"/>
            </CDropdownToggle>
            <CDropdownMenu className="pt-0" placement="bottom-end">
              <CDropdownItem>Associar Escala</CDropdownItem>
              <CDropdownItem>Imprimir Escala</CDropdownItem>
              <CDropdownItem>Exportar</CDropdownItem>
              <CDropdownItem>Importar</CDropdownItem>
            </CDropdownMenu>
          </CDropdown>
        </CWidgetDropdown>
      </CCol>
      <CCol sm="6" lg="3">
        <CWidgetDropdown
          color="gradient-success"
          header="8/95"
          text="Motoristas Livre"
          footerSlot={
            <ChartLineSimple
              pointed
              className="mt-3 mx-3"
              style={{height: '70px'}}
              dataPoints={[9, 12, 11, 15, 3, 5, 8]}
              pointHoverBackgroundColor="#2eb85c"
              label="Motoristas"
              labels="months"
            />
          }
        >
          <CDropdown>
            <CDropdownToggle caret className="text-white" color="transparent">
              <CIcon name="cil-settings"/>
            </CDropdownToggle>
            <CDropdownMenu className="pt-0" placement="bottom-end">
              <CDropdownItem>Associar Escala</CDropdownItem>
              <CDropdownItem>Imprimir Escala</CDropdownItem>
              <CDropdownItem>Exportar</CDropdownItem>
              <CDropdownItem>Importar</CDropdownItem>
            </CDropdownMenu>
          </CDropdown>
        </CWidgetDropdown>
      </CCol>

      <CCol sm="6" lg="3">
        <CWidgetDropdown
          color="gradient-warning"
          header="43/57"
          text="Veiculos Escalados"
          footerSlot={
            <ChartLineSimple
              className="mt-3"
              style={{height: '70px'}}
              backgroundColor="rgba(255,255,255,.2)"
              dataPoints={[78, 81, 80, 45, 34, 12, 40]}
              options={{ elements: { line: { borderWidth: 2.5 }}}}
              pointHoverBackgroundColor="warning"
              label="Veiculos"
              labels="months"
            />
          }
        >
          <CDropdown>
            <CDropdownToggle color="transparent">
              <CIcon name="cil-settings"/>
            </CDropdownToggle>
            <CDropdownMenu className="pt-0" placement="bottom-end">
              <CDropdownItem>Associar Escala</CDropdownItem>
              <CDropdownItem>Imprimir Escala</CDropdownItem>
              <CDropdownItem>Exportar</CDropdownItem>
              <CDropdownItem>Importar</CDropdownItem>
            </CDropdownMenu>
          </CDropdown>
        </CWidgetDropdown>
      </CCol>

      <CCol sm="6" lg="3">
        <CWidgetDropdown
          color="gradient-danger"
          header="61/61"
          text="Rotas Escaladas"
          footerSlot={
            <ChartLineSimple
              pointed
              className="mt-3 mx-3"
              style={{height: '70px'}}
              dataPoints={[15, 8, 53, 69, 65, 58, 61]}
              pointHoverBackgroundColor="danger"
              options={{ elements: { line: { tension: 0.00001 }}}}
              label="Rotas"
              labels="months"
            />
          }
        >
          <CDropdown>
            <CDropdownToggle caret={false} color="transparent">
              <CIcon name="cil-location-pin"/>
            </CDropdownToggle>
            <CDropdownMenu className="pt-0" placement="bottom-end">
              <CDropdownItem>Associar Escala</CDropdownItem>
              <CDropdownItem>Imprimir Escala</CDropdownItem>
              <CDropdownItem>Exportar</CDropdownItem>
              <CDropdownItem>Importar</CDropdownItem>
            </CDropdownMenu>
          </CDropdown>
        </CWidgetDropdown>
      </CCol>
    </CRow>
  )
}

export default StatsPanel
