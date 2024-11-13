import Navbar from '@renderer/components/Navbar'
import { Fragment } from 'react'
import React from 'react'
import { Layout } from 'antd'
import Home from '@renderer/pages/home'

const { Sider, Content } = Layout

const contentStyle: React.CSSProperties = {
  textAlign: 'center',
  minHeight: 120,
  lineHeight: '120px',
  color: '#fff',
  backgroundColor: '#fff'
}

const siderStyle: React.CSSProperties = {
  textAlign: 'center',
  lineHeight: '120px',
  color: '#fff',
  backgroundColor: '#1677ff'
}

const layoutStyle = {
  borderRadius: 8,
  height: '100%',
  width: '100%',
  overflow: 'hidden'
}

function App(): JSX.Element {
  return (
    <Fragment>
      <div style={{ height: '100vh', width: '100vw' }}>
        <Layout style={layoutStyle}>
          <Sider width="15%" style={siderStyle}>
            <Navbar />
          </Sider>
          <Layout>
            <Content style={contentStyle}>
              <Home />
            </Content>
          </Layout>
        </Layout>
      </div>
    </Fragment>
  )
}

export default App
