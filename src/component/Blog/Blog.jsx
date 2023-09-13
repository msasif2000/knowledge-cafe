import PropTypes  from 'prop-types';
import {FaBookmark} from 'react-icons/fa';

const Blog = ({ blog, handleBookmark }) => {
    const {title, cover, author_img, author, posted_date, reading_time, hashtags}= blog;
    return (
        <div>
            <img className='w-full rounded-xl mb-8' src={cover} alt="" />
            <div className='flex justify-between my-2'>
                <div className='flex gap-8 items-center'> 
                    <img src={author_img} alt="" className='w-14 h-14 rounded-full' />
                    <div>
                        <h3 className='text-2xl'>{author} </h3>
                        <p>{posted_date}</p>
                    </div>
                </div>
                <div className='flex gap-2 items-center'>
                    <h3>{reading_time} <span> min read</span></h3>
                    <button onClick={() => handleBookmark(blog)} className='text-xl pr-2'><FaBookmark></FaBookmark></button>
                </div>
            </div>
            <h2 className='text-4xl'>{title}</h2>
            <p>
                {
                    hashtags.map((hash, idx) => <span key={idx} ><a href="">{hash}</a></span>)
                }
            </p>
        </div>  
    );
};

Blog.propTypes = {
    blog: PropTypes.object.isRequired,
    handleBookmark: PropTypes.func.isRequired
}
export default Blog;