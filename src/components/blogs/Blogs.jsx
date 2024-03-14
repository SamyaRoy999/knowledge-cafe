import { useEffect, useState } from "react";
import Blog from '../../components/blog/Blog'
import BookMark from "../BookMark/BookMark";


const Blogs = () => {

    const [blogData, setblogData] = useState([]);
    const [bookMk, setBookMk] = useState([])

    const hendelBookMark = (bookSingel) => {
        const bookPre = [...bookMk, bookSingel]
        console.log(bookPre);
        setBookMk(bookPre)
    }
 
    useEffect(() => {
        fetch("/blog.json")
            .then(res => res.json())
            .then(data => setblogData(data))
    }, [])

    return (
        <div className="grid grid-cols-1  lg:grid-cols-6 gap-6">
            <div className="text-xl  lg:col-span-4">
               {
                blogData.map((item) => <Blog key={item.id} hendelBookMark={hendelBookMark} blog={item}/>)
               }
            </div>
            <div className="lg:col-span-2">
                <BookMark bookMk={bookMk}/>
            </div>
        </div>
    )
}
export default Blogs