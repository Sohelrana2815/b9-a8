import { FaRegStar } from "react-icons/fa";
import { Link } from "react-router-dom";
const Book = ({ book }) => {
  const { author, image, publisher, category, rating, bookId } = book;

  return (
    <>
      <Link to={`/books/${bookId}`} className="mt-10">
        <div className="card card-compact   bg-base-100 shadow-xl">
          <figure className="bg-base-200 py-10">
            <img src={image} alt="Shoes" />
          </figure>
          <div>
            <button className="btn btn-link text-green-500">Young Adult</button>
            <button className="btn btn-link text-green-500">Identity</button>
          </div>
          <div className="card-body">
            <h2 className="card-title playfair-display">{author}</h2>
            <p>{publisher}</p>
            <div className=" border-dashed"></div>
            <div className="flex items-center  justify-between">
              <p>{category}</p>
              <p className="flex items-center">
                {rating} <FaRegStar />
              </p>
            </div>
          </div>
        </div>
      </Link>
      {/*  */}
    </>
  );
};

export default Book;
