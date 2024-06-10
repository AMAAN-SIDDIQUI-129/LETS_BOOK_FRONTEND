import { useQuery } from "react-query"
import { Link } from "react-router-dom"
import * as apiClient from '../api-client'
import { toast } from "sonner"
const Company=()=>{
  const {data:companydata}=useQuery('GetCompany',apiClient.GetCompany,{
    onSuccess:async()=>{
      toast.success("Company Fetched")
    },
    onError:()=>{
      toast.error("Server Down")

    }
  })
return(
  <div className="space-y-1">
    <span className="flex justify-between">
      <h1 className="text-3xl font-bold bg-gray-500 flex rounded border w-full items-center justify-center "> 🏢Company Managment</h1>
      <Link className="text-black bg-blue-500 p-2 font-bold justify-between tracking-tight rounded-lg border  " to='/add-Tour'>Add Company</Link>


    </span>
    <div className="grid grid-cols-1 gap-8 border-orange-600">
      {companydata?.map((Tour)=>(
        <div className="flex flex-col justify-between border border-orange-600 rounded-lg p-8 gap-5">
          <h2 className="text-3xl font-bold  border border-gray-500 rounded-sm"><span>🏢</span>{Tour.name}</h2>
          <div className="whitespace-pre-line border-gray-600 border w-full rounded-sm font-bold ">{Tour.description}</div>
          <div className="grid grid-cols-5 gap-2">
            <div className="border-gray-600 rounded-lg flex items-center justify-center border">
              
            📍{Tour.city},{Tour.country}
              
            </div>
            <div className="border-gray-600 rounded-lg flex items-center justify-center border">
              
              ⭐{Tour.type}
                
              </div>
              <div className="border-gray-600 rounded-lg flex items-center justify-center border">
              
              💲{Tour.priceperTrip}
                
              </div>
              <div className="border-gray-600 rounded-lg flex items-center justify-center border">
              
              ⭐{Tour.rating}Rating
                
              </div>
              <div className="border-gray-600 rounded-lg flex items-center justify-center border">
              
              👨‍🦳{Tour.adultCount}
                
              </div>
              <div className="border-gray-600 rounded-lg flex items-center justify-center border">
              
              👨‍🦰{Tour.childCount}
                
              </div>
          </div>
          <span className="flex justify-end ">
            <Link to={`/add-Tour/${Tour._id}`} className="bg-blue-600 font-bold text-black border rounded-lg px-2  py-1 ">Detail</Link>

          </span>

        </div>
      ))}
    </div>

  </div>
)
}
export default Company