import bookMark from "../../assets/Frame (8).png"
import PropTypes from 'prop-types';

const Blog = ({blog , hendelBookMark}) => {
    
    const { author } = blog;
    const { date, img, reading_time, title } = blog.post;

    return (
        <div>
            <div>
                <img src={img} alt="" />
                <div className="flex justify-between items-center my-5 lg:my-8 ">
                    <div className="flex items-center gap-2">
                        <div className="w-14 h-14">
                            <img src={author.img} alt="" />
                        </div>
                        <div>
                            <h2 className="text-2xl font-bold">{author.name}</h2>
                            <p className="text-[#11111199] text-base font-semibold">{date}</p>
                        </div>
                    </div>
                    <div className="flex gap-2">
                        <p className="text-[#11111199] text-xl font-semibold">{reading_time} min read</p>
                        <button onClick={()=> hendelBookMark(blog)}>
                            <img src={bookMark} alt="" />
                        </button>
                    </div>
                </div>
                <h1 className="text-4xl font-bold leading-relaxed">{title}</h1>
            </div>
        </div>
    )
}

Blog.PropTypes = {
    hendelBookMark: PropTypes.func,
    blog: PropTypes.object
}

export default Blog