//pages contains all pages of home page
import landingImage from "../assets/landing.png"
import appDownloadImage from "../assets/landing.png"
import SearchBar, { SearchForm } from "@/components/SearchBar"
import { useNavigate } from "react-router-dom"
const HomePage = () => {
  const navigate=useNavigate();
  const handleSearchSubmit=(searchFormValues:SearchForm)=>{
    navigate({
      pathname:`/search/${searchFormValues.searchQuery}`,
    })
  }
  return (
    <div className="flex flex-col gap-12">
       <div className="md:px-32 flex flex-col gap-5 py-8 rounded-lg shadow-md bg-white -mt-16 text-center">
        <h1 className=" text-4xl text-orange-600 font-bold tracking-tight">
            Tuck into a takeaway today
        </h1>
        <span className="text-xl">Food is just a click away</span>
        <SearchBar placeHolder="Search by City or Town" onSubmit={handleSearchSubmit} />
       </div>
       <div className="grid md:grid-cols-2 gap-5">
        <img src={landingImage} />
        <div className="flex flex-col items-center justify-center gap-4 text-center">
          <span className="font-bold text-3xl tracking-tighter">
            Order takeaway even faster!
          </span>
          <span>
            Download the MernEats App for faster ordering and personalised
            recommendations
          </span>
          <img src={appDownloadImage} />
        </div>
      </div>
   </div> 
  )
}

export default HomePage