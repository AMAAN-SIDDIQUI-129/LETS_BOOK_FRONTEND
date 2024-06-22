export type Props={
  page:number;
  pages:number;
  onPageChange:(page:number)=>void;

}
const Pagination=({page,pages,onPageChange}:Props)=>{
  const pagenumbers=[];
  for(let i=1;i<=pages; i++){
    pagenumbers.push(i)
    
  }
  return(
    <div className="flex justify-center">
      <ul className="flex border border-slate-500">
        {pagenumbers.map((number)=>(
          <li className={`px-2 py-1 ${page=== number ? "bg-gray-500":""}`}>
            <button onClick={()=>onPageChange(number)}>{number}</button>

          </li>
        ))}
      </ul>
    </div>
  )

}
export default Pagination