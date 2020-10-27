import React from 'react';

import Gantt, {
  Tasks,
  Column,
  Editing,
  Toolbar,
  Item
} from 'devextreme-react/gantt';

import CheckBox from 'devextreme-react/check-box';
import SelectBox from 'devextreme-react/select-box';

import { tasks } from '../../services/database/dataGantt';

import { locale } from "devextreme/localization";

import {
  CCol,
  CInput,
  CLabel,
  CRow
} from '@coreui/react';

const itensScale = [
  {
    'id': 1,
    'text': 'Por horas',
    'value': 'hours',
  },
  {
    'id': 2,
    'text': 'Por Semanas',
    'value': 'weeks',
  },
  {
    'id': 3,
    'text': 'Por meses',
    'value': 'months',
  },
];


class WidgetsGantt extends React.Component {
  constructor() {
    super();
    this.state = {
      scaleType: 'weeks',
      taskTitlePosition: 'none',
      showResources: false
    };
    this.onScaleTypeChanged = this.onScaleTypeChanged.bind(this);
    this.onTaskTitlePositionChanged = this.onTaskTitlePositionChanged.bind(this);
    this.onShowResourcesChanged = this.onShowResourcesChanged.bind(this);

    locale(navigator.language);
  }
  render() {
    const {
      scaleType,
      taskTitlePosition,
      showResources
    } = this.state;
    return (
      <div id="form-demo">
        <CRow className="pb-3">
          <CCol md="3">
            <CLabel>Exibir Escala</CLabel>
              <SelectBox
                dataSource={itensScale}
                displayExpr="text"
                valueExpr="value"
                value={scaleType}
                onValueChanged={this.onScaleTypeChanged}
              />
          </CCol>
          <CCol md="6" className="d-flex align-items-end justify-content-between">
            <CheckBox
                  className="col-md-6"
                  text="Exibir recursos"
                  value={showResources}
                  onValueChanged={this.onShowResourcesChanged}
                />
                <CInput
                  className="col-md-6"
                  type="text"
                  id="search"
                  name="search"
                  placeholder="Pesquisar..."
                />
          </CCol>
        </CRow>
        <div className="widget-container">
          <Gantt
            elementAttr={this.ganttAttributes}
            taskListWidth={500}
            height={700}
            taskTitlePosition={taskTitlePosition}
            scaleType={scaleType}
            showResources={showResources}
            >

            <Tasks
            dataSource={tasks}
            colorExpr="taskColor"
            acessKey={1}
            />

            <Column dataField="title" caption="Motorista" width={300} />
            <Column dataField="start" caption="Data Inicial" />
            <Column dataField="end" caption="Data Final" />

            <Toolbar >
                <Item name="collapseAll" />
                <Item name="expandAll" />
                <Item name="zoomIn" />
                <Item name="zoomOut" />
            </Toolbar>

            <Editing enabled={false} />
          </Gantt>
        </div>
      </div>
    );
  }

  onScaleTypeChanged(e) {
    this.setState({
      scaleType: e.value
    });
  }
  onTaskTitlePositionChanged(e) {
    this.setState({
      taskTitlePosition: e.value
    });
  }
  onShowResourcesChanged(e) {
    this.setState({
      showResources: e.value
    });
  }
}

export default WidgetsGantt;
