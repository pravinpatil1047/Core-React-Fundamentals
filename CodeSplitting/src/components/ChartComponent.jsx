import React from 'react'
import { Line } from 'react-chartjs-2'
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement
} from 'chart.js'

// ✅ Register chart modules
ChartJS.register(
  Title,
  Tooltip,
  Legend,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement
)

export default function ChartComponent () {
  const data = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
    datasets: [
      {
        label: 'Sales',
        data: [12, 19, 7, 15, 22],
        borderColor: 'blue',
        backgroundColor: 'lightblue',
        tension: 0.4
      }
    ]
  }

  return (
    <div style={{ width: '500px', marginTop: '20px' }}>
      <h3>📈 Sales Chart</h3>
      <Line data={data} />
    </div>
  )
}
