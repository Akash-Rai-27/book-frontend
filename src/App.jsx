import {Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import CreateBooks from './pages/CreateBooks'
import EditBooks from './pages/EditBooks'
import DeleteBook from './pages/DeleteBook'
import ShowBook from './pages/ShowBook'



function App() {
  return (
    <>
      
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/books/create' element={<CreateBooks/>}/>
        <Route path='/books/edit/:id' element={<EditBooks/>}/>
        <Route path='/books/delete/:id' element={<DeleteBook/>}/>
        <Route path='/books/details/:id' element={<ShowBook/>}/>
      </Routes>
    </>
  )
}

export default App
