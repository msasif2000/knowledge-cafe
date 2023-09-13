import PropTypes  from 'prop-types';
const Blog = ({ blog }) => {
    const {title, cover, author_img, author, posted_date, reading_time, hashtags}= blog;
    return (
        <div>
            <img src={cover} alt="" />
            <div className='flex justify-between my-2'>
                <div className='flex gap-8 items-center'> 
                    <img src={author_img} alt="" className='w-16 h-16 rounded-full' />
                    <div>
                        <h3 className='text-2xl'>{author} </h3>
                        <p>{posted_date}</p>
                    </div>
                </div>
                <div>
                    <h3>{reading_time} <span> min read</span></h3>
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
    blog: PropTypes.object.isRequired
}
export default Blog;