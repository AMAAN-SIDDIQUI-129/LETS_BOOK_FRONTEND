import { ServicesType } from "../config/type"

type Props={
  types:string[],
  onChange:(event:React.ChangeEvent<HTMLInputElement>)=>void
}
const Tour=({types,onChange}:Props)=>{
  return(
    <div className=" pb-5 ">
      <h4 className="text-sm justify-center font-bold">Booking Type</h4>
      {ServicesType.map((type)=>(
        <label className="flex flex-row space-x-2">
          <input type="checkbox" checked={types.includes(type)} value={type} className="rounded" onChange={onChange}/>
          <span>{type}</span>
        </label>
      ))}


    </div>


  )



}
export default Tour