import { useEffect, useMemo, useState } from 'react'
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from 'recharts'
import { DatePicker, DatePickerProps } from 'antd'
import { RangePickerProps } from 'antd/es/date-picker'
import { Empty } from 'antd'

const { RangePicker } = DatePicker

interface ChartData {
  time: string
  humidity: number
}

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export default function CustomLineChart() {
  const [data, setData] = useState<ChartData[] | null>(null)
  const [selectedDate, setSelectedDate] = useState<string[] | null>(null)

  // Dữ liệu cố định cho chart
  const loadData = () => {
    const humidityData: ChartData[] = [
      { time: '2024-11-10', humidity: 55 },
      { time: '2024-11-11', humidity: 60 },
      { time: '2024-11-12', humidity: 58 },
      { time: '2024-11-13', humidity: 65 }
    ]
    setData(humidityData)
  }

  // Định dạng lại trục Y cho đúng với định dạng số mong muốn
  const formatYAxis = (tickItem: number) => {
    return tickItem.toFixed(1) // Giới hạn số chữ số thập phân
  }

  useEffect(() => {
    loadData()
  }, [])

  const displayData = data && data.length > 0 ? data : [{ time: 'No Data', humidity: 0 }]

  const maxHumidity = Math.max(...displayData.map((d) => d.humidity), 0)
  const humidityDomain = [0, maxHumidity + maxHumidity * 0.1]
  const onOk = (value: DatePickerProps['value'] | RangePickerProps['value']) => {
    console.log('onOk: ', value)
  }

  const newData: ChartData[] | null = useMemo(
    () =>
      data?.filter((item: ChartData) => {
        console.log(selectedDate)
        if (selectedDate == null) return true
        const startTime = selectedDate[0]
        const endTime = selectedDate[1]
        return item.time >= startTime && item.time <= endTime
      }) ?? null,
    [data, selectedDate]
  )

  return (
    <div>
      <RangePicker
        onChange={(_, dateString) => {
          if (dateString[0] != '') setSelectedDate(dateString)
          else setSelectedDate(null)
        }}
        onOk={onOk}
      />
      {(newData?.length ?? 0 > 0) ? (
        <div style={{ width: '100%' }}>
          <ResponsiveContainer width="100%" height={340}>
            <LineChart data={newData ?? []} margin={{ top: 40, right: 30, left: 20, bottom: 0 }}>
              <CartesianGrid stroke="#f5f5f5" strokeDasharray="1 3" />
              <XAxis dataKey="time" />
              <YAxis
                yAxisId="left"
                orientation="left"
                stroke="#0000ff"
                domain={humidityDomain}
                tickFormatter={formatYAxis} // Định dạng giá trị trục Y
                label={{
                  value: '%',
                  angle: 0,
                  position: 'insideTopLeft',
                  style: {
                    textAnchor: 'middle',
                    fill: '#0000ff',
                    fontSize: 14,
                    fontWeight: 'bold'
                  },
                  offset: -10
                }}
              />
              <Tooltip />
              <Legend />
              <Line
                yAxisId="left"
                type="monotone"
                dataKey="humidity"
                stroke="#0000ff"
                strokeWidth={3}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      ) : (
        <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />
      )}
    </div>
  )
}
