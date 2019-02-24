import React, { PureComponent } from 'react';
import {Form} from 'antd'
import Annulus from './Annulus'

export default class WIForm extends PureComponent {
  constructor(props) {
    super(props)
    this.catchValueChange = this.catchValueChange.bind(this)
  }

  state = {
    formValues: null
  }

  catchValueChange(props,changed,all) {
    this.setState({formValues:all})
  }

  render() {
    const MForm = Form.create({onFieldsChange:this.catchValueChange})(Annulus)
    return (
      <MForm />
    )
  }
}