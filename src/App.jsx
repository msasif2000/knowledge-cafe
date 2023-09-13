
import './App.css'
import Blogs from './component/Blogs/Blogs'
import Bookmarks from './component/Bookmarks/Bookmarks'
import Header from './component/Header/Header'

function App() {

  return (
    <>
      <Header />
      <div className='md:flex '>
      <Blogs />
      <Bookmarks />
      </div>
    </>
  )
}

export default App
