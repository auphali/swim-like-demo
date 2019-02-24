import React, { Fragment } from 'react';
import {Statistic} from 'antd'

const WellDetail = props => {
  const {well,field,x,y,spud_date: spudDate,completion_type: completionType} = props
  return (
    <Fragment>
      <Statistic title='Well well' value={well} />
      <Statistic title='Field Name' value={field} />
      <Statistic title='Spud Date' value={spudDate} />
      <Statistic title='Completion Type' value={completionType} />
      <Statistic title='X' value={x} />
      <Statistic title='Y' value={y} />
    </Fragment>
  )
}

export default WellDetail