import { Col, Row } from 'antd'
import CustomLineChart from '@renderer/components/custom/LineChart'

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export default function Home() {
  return (
    <Row style={{ height: '100%', width: '100%' }}>
      <Col span={18}>
        <Row gutter={[16, 16]}>
          <Col span={12}>
            {/* eslint-disable-next-line react/jsx-no-undef */}
            <CustomLineChart />
          </Col>
          <Col span={12}>
            <CustomLineChart />
          </Col>

          <Col span={12}>
            {/* eslint-disable-next-line react/jsx-no-undef */}
            <CustomLineChart />
          </Col>
          <Col span={12}>
            <CustomLineChart />
          </Col>
        </Row>
      </Col>
      <Col span={6} style={{ background: '#D9D9D9' }}></Col>
    </Row>
  )
}
