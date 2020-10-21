import React from 'react'

import Scheduler from 'devextreme-react/scheduler'

import { data } from '../../services/database/data';

import ptMessages from "devextreme/localization/messages/pt.json";
import { locale, loadMessages } from "devextreme/localization";

const currentDate = new Date(2020, 10, 20);
const views = ['timelineDay', 'week', ];

class WidgetScheduler extends React.Component {
  constructor(props){
      super(props);
      loadMessages(ptMessages);
      locale(navigator.language);
  }
  render() {
    return (
      <Scheduler
        dataSource={data}
        views={views}
        defaultCurrentView="timelineDay"
        defaultCurrentDate={currentDate}
        height={600}
        startDayHour={8} />
    );
  }
}

export default WidgetScheduler;
