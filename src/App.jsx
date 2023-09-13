
import { useState } from 'react'
import './App.css'
import Blogs from './component/Blogs/Blogs'
import Bookmarks from './component/Bookmarks/Bookmarks'
import Header from './component/Header/Header'

function App() {
  const [bookmarks, setBookmarks]=useState([]);
  const [readingTime, setReadingTime] = useState(0);

  const handleBookmark = blog => {
    const newBookmarks = [...bookmarks, blog];
    setBookmarks(newBookmarks);
  }

  const  handleMarksAsRead = (id, time) => {
    const newReadingTime = readingTime + time;
    setReadingTime(newReadingTime);

    //remove from bookmarks
    const  remainingBookmarks= bookmarks.filter(bookmark => bookmark.id !== id);
    setBookmarks(remainingBookmarks);
  }
  return (
    <>
      <div className='md:container mx-auto'>
        <Header />
        <div className='md:flex '>
          <Blogs handleBookmark={handleBookmark} handleMarksAsRead={handleMarksAsRead }></Blogs>
          <Bookmarks bookmarks={bookmarks} readingTime={readingTime}></Bookmarks>
        </div>
      </div>
    </>
  )
}

export default App
