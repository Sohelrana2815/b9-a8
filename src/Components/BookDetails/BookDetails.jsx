import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const BookDetails = () => {
  const books = useLoaderData();
  const { bookId } = useParams();
  const bookIdInt = parseInt(bookId);
  const book = books.find((book) => book.bookId === bookIdInt);
  console.log(book);
  const handleReadBook = () => {
    toast("You read the book!");
  };
  return (
    <>
      <div>
        <div className="grid gap-4 md:grid-cols-2 ">
          <div className="relative left-72 top-20 ">
            <img className="w-40" src={book.image} alt="" />
          </div>
          <div>
            <h1 className="playfair-display font-bold text-2xl ">
              {book.bookName}
            </h1>
            <p>By: {book.author}</p>
            <div className="divider"></div>
            <p> {book.category}</p>
            <div className="divider"></div>
            <p>Review: {book.review}</p>
            {book.tags.map((tag, idx) => (
              <button
                className="mr-3 btn btn-ghost bg-gray-100-100 text-green-600"
                key={idx}
              >
                #{tag}
              </button>
            ))}
            <div className="divider"></div>
            {/*  */}
            <div className="flex ">
              <div>
                <h1>Number of Pages:</h1>
                <h1>Publisher:</h1>
                <h1>Year of Publishing:</h1>
                <h1>Rating:</h1>
              </div>
              <div className=" ml-20">
                <p> {book.totalPages}</p>
                <p> {book.publisher}</p>
                <p> {book.yearOfPublishing}</p>
                <p> {book.rating}</p>
              </div>
            </div>
            <ToastContainer />
          </div>
        </div>
      </div>
      <div className=" mt-[100px] ml-[720px] ">
        <button
          onClick={handleReadBook}
          className="btn hover:bg-green-500 btn-outline "
        >
          Read
        </button>
        <button className="btn  btn-info ml-6">Wishlist</button>
      </div>
    </>
  );
};

export default BookDetails;
