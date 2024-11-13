// eslint-disable-next-line @typescript-eslint/explicit-function-return-type,@typescript-eslint/no-unused-vars
import {
  BellFilled,
  CheckCircleFilled,
  HomeFilled,
  PhoneFilled,
  SettingFilled
} from '@ant-design/icons'
import type { MenuProps } from 'antd'
import { Menu, Flex, Avatar } from 'antd'
import { UserOutlined } from '@ant-design/icons'
import { CSSProperties } from 'react'

type MenuItem = Required<MenuProps>['items'][number]

const iconStyle: CSSProperties = { color: 'black' }

const items: MenuItem[] = [
  { key: '1', icon: <HomeFilled style={iconStyle} />, label: 'HomeFilled' },
  { key: '2', icon: <PhoneFilled style={iconStyle} />, label: 'PhoneFilled' },
  { key: '3', icon: <BellFilled style={iconStyle} />, label: 'BellFilled' },
  { key: '4', icon: <SettingFilled style={iconStyle} />, label: 'Setting ' },
  { key: '5', icon: <CheckCircleFilled style={iconStyle} />, label: 'CheckCircleFilled' }
]

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export default function Navbar() {
  return (
    <Flex
      vertical={true}
      style={{ height: '100vh', width: '100%', background: 'white', padding: '48px' }}
      align={'center'}
    >
      <Flex vertical={true} align={'center'} justify={'center'} style={{ height: '100%' }}>
        <Menu
          defaultSelectedKeys={['1']}
          defaultOpenKeys={['sub1']}
          mode="inline"
          inlineCollapsed={true}
          items={items}
        />
      </Flex>
      {/* eslint-disable-next-line react/jsx-no-undef */}
      <Avatar size={32} icon={<UserOutlined />} />
    </Flex>
  )
}
