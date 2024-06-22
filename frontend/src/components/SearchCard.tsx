import { AiFillStar } from "react-icons/ai"
import { BookType } from "../../../backend/src/shared/type"
import { Link } from "react-router-dom"

type Props={
  Tour:BookType
}
const SearchCard = ({Tour}:Props) => {
  return (
    <div className="grid grid-cols-1 xl:grid-cols-[250px_3fr] border border-slate-500 ">
      <div className="w-full  h-[300px]">
        <img src={Tour.imageUrl[0]} className="w-full h-full object-cover object-center"/>



      </div>
      <div className=" grid grid-rows-[1fr_2fr_3fr] ">
        
        <div  className="gap-2">
          <div className="flex items-center border peer ">
            <span className="flex flex-row items-center justify-center object-center font-bold" > Rating:{Array.from({length:Tour.rating}).map(()=>(
              <AiFillStar className="fill-red-500"/>
            ))}</span>
            <span className="ml-1 text-sm text-black ">Type:{Tour.type}</span>
          </div>
        </div>
        <h2 className="text-2xl peer-hover:border-gray-600 -mt-4 font-bold cursor-pointer">{Tour.name}</h2>
        <div className="-mt-9">
        <div className="line-clamp-4 text-sm font-bold">{Tour.description}</div>
      </div>


<div className="grid grid-cols-2 items-end whitespace-nowrap ">
  <div className="flex gap-1 items-start justify-start mb-2">
    <span className="bg-blue-600 px-2 py-1 cursor-pointer text-white border rounded-lg ">
      Price: 💲{Tour.priceperTrip}

    </span>

  </div>
  <div className="justify-end items-end flex mb-2">
    <Link to={`/add-Tour/${Tour._id}`}>
    <button className="bg-blue-600 text-white  hover:bg-red-500 rounded-lg border font-bold px-2 py-1">Details</button>
</Link>

  </div>
</div>
      </div>
     


    </div>

  )
}

export default SearchCard