import React, { Component } from 'react';
import {connect} from 'dva';
import {Card} from 'antd';
import JobRequest from '@/components/WLI/Tables'

@connect(({loading,wellwli}) => {
  const {fieldList,wellList,field,well,requests} = wellwli
  return ({
    fieldList,wellList,field,well,requests
  })
})
class WellIntervention extends Component {
  state = {
    selectedTab: null
  }

  render() {
    const {selectedTab} = this.state
    return (
      <Card title='Job Request & Program'>
        <JobRequest />
      </Card>
    )
  }
}

export default WellIntervention