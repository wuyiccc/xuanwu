import StatusDB from '../status/StatusDB'

export default function() {

  const { searchList } = StatusDB.db.getState()

  return (
    <div className="bg-slate-50  p-3 rounded-bl-lg rounded-br-lg -mt-[7px] pb-2">
      {searchList.map((item) => (
        <div key={item.id} className="text-slate-700 truncate mb-2">
          {item.content}
        </div>
      ))}
    </div>
  )
}
