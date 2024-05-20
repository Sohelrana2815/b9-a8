import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredReadBook } from "../Utility/localStorage";
import { CiLocationOn } from "react-icons/ci";
import { CgProfile } from "react-icons/cg";
import { CgNotes } from "react-icons/cg";

const ListedBooks = () => {
  const lists = useLoaderData();
  const [readBooks, setReadBooks] = useState([]);

  useEffect(() => {
    const storedBookIds = getStoredReadBook();
    if (lists.length > 0) {
      //   const booksRead = lists.filter((list) => storedBookIds.includes(list.id));
      const booksRead = [];
      for (const bookId of storedBookIds) {
        const list = lists.find((list) => list.bookId === bookId);
        if (list) {
          booksRead.push(list);
        }
      }
      //   console.log(lists, storedBookIds, booksRead);
      setReadBooks(booksRead);
    }
  }, [lists]);

  return (
    <>
      <div>
        <h1 className="text-2xl text-center font-bold bg-gray-100">
          ListedBooks: {readBooks.length}
        </h1>
      </div>
      <div>
        {readBooks.map((book) => (
          <div key={book.bookId}>
            <div className="hero  bg-base-200 flex">
              <div className="hero-content flex-col lg:flex-row ">
                <img src={book.image} className="max-w-sm rounded-lg " />
                <div>
                  <h1 className="text-2xl font-bold">{book.bookName}</h1>
                  <p className="py-6">By:{book.author}</p>
                  <div className=" flex justify-between  ">
                    <p>
                      {book.tags.map((tag, idx) => (
                        <span
                          className="ml-2 btn hover:bg-black text-green-400"
                          key={idx}
                        >
                          #{tag}
                        </span>
                      ))}
                    </p>
                    <p className="flex items-center">
                      <CiLocationOn />
                      Year of publishing: {book.yearOfPublishing}
                    </p>
                  </div>
                  <div className="flex justify-between mt-4">
                    <p className="flex items-center ">
                      <CgProfile />
                      Publisher: {book.publisher}
                    </p>
                    <p className="flex items-center">
                      <CgNotes />
                      Pages: {book.totalPages}
                    </p>
                  </div>
                  <div className="divider"></div>
                  <div className="space-x-4">
                    <button className="btn btn-outline text-white bg-orange-500 hover:bg-orange-600">
                      Category: {book.category}
                    </button>
                    <button
                      className="btn btn-outline bg-blue-500 hover:bg-blue-600
                  text-white"
                    >
                      Rating: {book.rating}
                    </button>
                    <button className="btn bg-green-600">View Details</button>
                  </div>
                </div>
              </div>
            </div>
            <div className="divider"></div>
          </div>
        ))}
      </div>
    </>
  );
};

export default ListedBooks;
