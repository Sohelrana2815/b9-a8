const Book = ({ book }) => {
  const { author } = book;
  return (
    <div>
      <h1 className="text-2xl font-bold">author: {author}</h1>
    </div>
  );
};

export default Book;
