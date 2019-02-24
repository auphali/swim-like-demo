import React, { PureComponent } from 'react';
import {Form,Input,InputNumber,Select,DatePicker,Row,Col,Upload,Icon,Table,Divider} from 'antd'

const FormItem = Form.Item
const Dragger = Upload.Dragger


const annulusForm = props => {
  const {action,form} = props
  const {getFieldDecorator} = form
  const oneFourthOrHalf = {lg:12,md:6}
  const labelLayout = {
    wrapperCol:{lg:12,md:24},
    labelCol:{lg:12,md:24}
  }
  const noLabelLayout = {
    labelCol:{span:0},
    wrapperCol:{span:24}
  }
  return (
    <Form action={action}>
      <Row gutter={0}>
        <Col {...oneFourthOrHalf}>
          <FormItem {...labelLayout} label='Supervisor Name'>
            {
              getFieldDecorator('supervisor_name',{required:true})(<Input />)
            }
          </FormItem>
        </Col>
        <Col {...oneFourthOrHalf}>
          <FormItem {...labelLayout} label='Check Date'>
            {
              getFieldDecorator('check_date',{required:true})(<DatePicker />)
            }
          </FormItem>
        </Col>
        <Col {...oneFourthOrHalf}>
          <FormItem {...labelLayout} label='Previous Check'>
            {
              getFieldDecorator('prev_check_date',{required:true})(<DatePicker />)
            }
          </FormItem>
        </Col>
        <Col {...oneFourthOrHalf}>
          <FormItem {...labelLayout} label='Next Check'>
            {
              getFieldDecorator('next_check_date',{required:true})(<DatePicker />)
            }
          </FormItem>
        </Col>
      </Row>
      <Divider type='horizontal' />
      <Row gutter={0}>
        <Col span={9}>Annulus</Col>
        <Col span={5}>Top Operating Window (TOW)</Col>
        <Col span={5}>Max Operating Window (MOP)</Col>
        <Col span={5}>Current Pressure (P, psia)</Col>
      </Row>
      <Row gutter={0}>
        <Col span={9}>A Annulus</Col>
        <Col span={5}>
          <FormItem {...noLabelLayout}>
            {
              getFieldDecorator('a_annulus_tow',{})(<InputNumber />)
            }
          </FormItem>
        </Col>
        <Col span={5}>
          <FormItem {...noLabelLayout}>
            {
              getFieldDecorator('a_annulus_mop',{})(<InputNumber />)
            }
          </FormItem>
        </Col>
        <Col span={5}>
          <FormItem {...noLabelLayout}>
            {
              getFieldDecorator('a_annulus_pres',{})(<InputNumber />)
            }
          </FormItem>
        </Col>
      </Row>
      <Row gutter={0}>
        <Col span={9}>B Annulus</Col>
        <Col span={5}>
          <FormItem {...noLabelLayout}>
            {
              getFieldDecorator('b_annulus_tow',{})(<InputNumber />)
            }
          </FormItem>
        </Col>
        <Col span={5}>
          <FormItem {...noLabelLayout}>
            {
              getFieldDecorator('b_annulus_mop',{})(<InputNumber />)
            }
          </FormItem>
        </Col>
        <Col span={5}>
          <FormItem {...noLabelLayout}>
            {
              getFieldDecorator('b_annulus_pres',{})(<InputNumber />)
            }
          </FormItem>
        </Col>
      </Row>
      <Row gutter={0}>
        <Col span={9}>C Annulus</Col>
        <Col span={5}>
          <FormItem {...noLabelLayout}>
            {
              getFieldDecorator('c_annulus_tow',{})(<InputNumber />)
            }
          </FormItem>
        </Col>
        <Col span={5}>
          <FormItem {...noLabelLayout}>
            {
              getFieldDecorator('c_annulus_mop',{})(<InputNumber />)
            }
          </FormItem>
        </Col>
        <Col span={5}>
          <FormItem {...noLabelLayout}>
            {
              getFieldDecorator('c_annulus_pres',{})(<InputNumber />)
            }
          </FormItem>
        </Col>
      </Row>
      <Row gutter={0}>
        <Col span={14}>
          Corrosion condition of conductor pipe or outer casing
        </Col>
        <Col span={10}>
          <FormItem {...noLabelLayout}>
            {
              getFieldDecorator('corrosion_condition',{})(<Select />)
            }
          </FormItem> 
        </Col>
      </Row>
      <Row gutter={0}>
        <Col span={9}>THP</Col>
        <Col span={5}>
          <FormItem {...noLabelLayout}>
            {
              getFieldDecorator('thp_tow',{})(<InputNumber />)
            }
          </FormItem>
        </Col>
      </Row>
      <Row gutter={0}>
        <Col span={9}>THT</Col>
        <Col span={5}>
          <FormItem {...noLabelLayout}>
            {
              getFieldDecorator('tht_tow',{})(<InputNumber />)
            }
          </FormItem>
        </Col>
      </Row>
      <Divider type='horizontal' />
      <Row>
        <Col span={8}>
          <Dragger>
            <p className="ant-upload-drag-icon">
              <Icon type="inbox" />
            </p>
            <p className="ant-upload-text">Click or drag file to this area to upload</p>
            <p className="ant-upload-hint">Support for a single or bulk upload. Strictly prohibit from uploading company data or other band files</p>
          </Dragger>
        </Col>
        <Col span={16}>
          <Table
            columns={[
              {title:'File ID'},
              {title:'Upload Date'},
              {title:'File Name'},
              {title:'Description'},
            ]}
          />
        </Col>
      </Row>
    </Form>
  )
}

export default annulusForm