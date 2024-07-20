import { useState } from 'react'
import { mockData } from '../mock/MockData'

export default function () {
  const [data, setData] = useState(mockData)

  return (
    <div className="bg-slate-50 p-3">
      {data.map((item) => (
        <div key={item.id} className="text-slate-700 truncate mb-2">
          {item.content}
        </div>
      ))}
    </div>
  )
}
