import Footer from "../components/Footer"
import Header from "../components/Header"
import Searchbar from "../components/Searchbar"
interface Props{
  children:React.ReactNode
  

}
const Layouts = ({children}:Props) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header/>
      <div className="container mx-auto">
        <Searchbar/>
      </div>
      <div className="container mx-auto py-10 flex-1">
        {children}
      </div>

     
    <Footer/>
    </div>
    
  )
}

export default Layouts