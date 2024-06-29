import {Link} from 'react-router-dom'
import { useAppContext } from '../context/appC'
import SignoutButton from './SignoutButton'
const Header = () => {
  const {isLoggedIn}=useAppContext()
  return (
    <div className="bg-orange-500 py-6">
      <div className="container mx-auto flex justify-between">
      
      
         

      
        
        <div className='text-3xl font-bold tracking-tight text-white px-2'>
      <Link to='/'>
      <span className='text-2xl font-thin gap-2 justify-center cursor-pointer'>🏠</span>

      <span className='ml-2'>
         
        LETS ` BOOK
       </span>
      </Link>
        </div>
       
       
        <span className='flex space-x-2'>
        {isLoggedIn?
        (<>
        <Link to='/add-Tour' className='justify-center items-center mt-1 space-2 text-black-50 font-bold   flex '> 🏦Add Company </Link>
     <Link to='/my-Company' className='justify-center items-center mt-1 space-2 text-black-50 font-bold   flex '> 🚌My Company</Link>
       <Link to='/my-account' className='justify-center items-center mt-1 space-2 font-bold   gap-2 flex '>👨🏻‍💼MY Account</Link>
       <SignoutButton/>
       
       
      



       </>
      
      
       
        ):( <Link to="/sign-in" className='flex items-center text-white-500 px-3 font-bold hover:text-blue-50'>Sign in</Link>)}</span>
      
         
      </div>
    </div>
  )
}

export default Header


