import {Link} from 'react-router-dom'
import { useAppContext } from '../context/appC'
import SignoutButton from './SignoutButton'
const Header = () => {
  const {isLoggedIn}=useAppContext()
  return (
    <div className="bg-orange-500 py-6">
      <div className="container mx-auto flex justify-between">
        {isLoggedIn?
        (<>
        <button className='bg-white text-black rounded-lg font-bold border '>Logout</button>


        </>
        ):(
          <Link to='/register'><button className='font-bold text-black bg-white rounded-lg border'>SIGNUP</button></Link>

        )}
      
         

      
        
        <div className='text-3xl font-bold tracking-tight text-white'>
        <span>
        LETS ` BOOK
       </span>
        </div>
       
       
        <span className='flex space-x-2'>
        {isLoggedIn?
        (<>
       
     <Link to='/my-booking' className='justify-center items-center mt-1 space-2 text-black-50 font-bold   flex '>My Rides</Link>
       <Link to='/my-account' className='justify-center items-center mt-1 space-2 font-bold   gap-2 flex '>MY Account</Link>
       <SignoutButton/>
       
       
      



       </>
      
      
       
        ):( <Link to="/sign-in" className='flex items-center text-white-500 px-3 font-bold hover:text-blue-50'>Sign in</Link>)}</span>
      
         
      </div>
    </div>
  )
}

export default Header


