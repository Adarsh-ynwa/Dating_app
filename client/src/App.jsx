import { Route, Routes } from "react-router-dom"
import Homepage from "./Pages/Homepage"
import Authpage from "./Pages/Authpage"
import Profilepage from "./Pages/Profilepage"
import Chatpage from "./Pages/Chatpage"
import { useAuthStore } from "./store/useAuthStore"
import { useEffect } from "react"
import { Toaster } from "react-hot-toast"
 



function App() {
    const { checkAuth } = useAuthStore();

	useEffect(() => {
		checkAuth();
	}, [checkAuth]);

	

 return(
  <>
  <div  className='absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]'>
   <Routes>
                <Route path='/' element= {<Homepage />} />
				<Route path='/auth' element={<Authpage />} />
				<Route path='/profile' element={<Profilepage />} />
				<Route path='/chat/:id' element={<Chatpage />} />
   </Routes>

   <Toaster/>
  </div>
  </>
 )
}

export default App
