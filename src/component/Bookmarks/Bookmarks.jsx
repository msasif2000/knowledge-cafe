import PropTypes from 'prop-types';
import Bookmark from '../Bookmark/Bookmark';
const Bookmarks = ({ bookmarks, readingTime }) => {
    return (
        <div className='md:w-1/3  ml-4 mt-8 '>
            <div className='mb-4 bg-slate-100 p-4 rounded-2xl'>
                <h3 className='text-purple-600 text-center font-bold text-2xl '>Spent time on read : {readingTime}</h3>
            </div>
            <div className=" bg-gray-300 p-2 rounded-xl">

                <h3 className="text-3xl text-center">Bookmarked Blogs: {bookmarks.length}</h3>
                {
                    bookmarks.map((bookmark, idx) => <Bookmark key={idx} bookmark={bookmark}></Bookmark>)
                }
            </div>
        </div>
    );
};

Bookmarks.propTypes = {
    bookmarks: PropTypes.array,
    readingTime: PropTypes.number

}

export default Bookmarks;