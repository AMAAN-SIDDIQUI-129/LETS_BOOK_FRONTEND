type Props={
  rating:string[]
  onChange:(event:React.ChangeEvent<HTMLInputElement>)=>void
}
const StarFilter=({rating,onChange}:Props)=>{
  return(
    <div className="pb-5  border-b border-slate-300 ">
      <h4 className="text-md font-semibold mb-2">Rating</h4>
        
        {["1","2","3","4","5"].map((star)=>(
          <label className="flex  flex-row space-x-2">
             
            <input type="checkbox" className="rounded gap-2" checked={rating.includes(star)} value={star} onChange={onChange}/>
           <span className="gap-3 flex">{star}</span>

            </label>
        ))}
       

    </div>
  )

}
export default StarFilter