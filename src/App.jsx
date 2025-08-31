import './App.css'
import Home from './components/pages/Home'
import RootLayout from './components/layouts/RootLayout'
import { Routes,Route } from 'react-router-dom'
import Shop from './components/pages/Shop'
import Journal from './components/pages/Journal'
import Error from './components/pages/Error'
import Collection from './components/pages/Collection'
import Lookbook from './components/pages/Lookbook'
import Pages from './components/pages/Pages'


function App() {
 
  return (
   <>
   <Routes>
     <Route path="/" element={<RootLayout />}>
     <Route index element={<Home />} />
     <Route path="shop" element={<Shop />} />
     <Route path="collection" element={<Collection />} />
     <Route path="journal" element={<Journal />} />
     <Route path="lookbook" element={<Lookbook />} />
     <Route path="pages" element={<Pages />} />
     <Route path="*" element={<Error />} />
  </Route>

   </Routes>
   </>
  )
}

export default App
