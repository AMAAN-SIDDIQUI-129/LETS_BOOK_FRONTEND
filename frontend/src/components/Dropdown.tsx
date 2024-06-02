import { useAuth0 } from "@auth0/auth0-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuTrigger, Separator } from "@radix-ui/react-dropdown-menu"
import { CircleUserRound } from "lucide-react"

const Dropdown = () => {
  const {user,logout}=useAuth0()
  return (
    <DropdownMenu >
      <DropdownMenuTrigger className="">
        <span className="justify-center items-center font-bold">📩{user?.email}</span>

      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel className="justify-center flex items-center  font-bold ">Accounts</DropdownMenuLabel>
        <Separator/>
        <CircleUserRound className="flex  justify-center items-center ">USERS</CircleUserRound>
        
        <DropdownMenuItem className="justify-center items-center font-bold ">{user?.email}</DropdownMenuItem>
        <DropdownMenuItem><button className="border rounded-sm bg-black justify-center items-center text-white  "onClick={()=>logout()}>SIGN-OUT</button></DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>

  )
}

export default Dropdown