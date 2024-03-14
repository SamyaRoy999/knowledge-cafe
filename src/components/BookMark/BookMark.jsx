
const BookMark = ({bookMk}) => {
   console.log(bookMk);
    return (
        <div>
           {
            bookMk.map((item, ids)=>  <h1 key={ids}>{item.post.title}</h1>)
           }
        </div>
    )
}
export default BookMark