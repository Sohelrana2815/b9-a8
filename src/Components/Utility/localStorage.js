const getStoredReadBook = () => {
  const storedReadBook = localStorage.getItem("book-read");
  if (storedReadBook) {
    return JSON.parse(storedReadBook);
  }
  return [];
};

const saveReadBook = (bookId) => {
  const storedReadBooks = getStoredReadBook();
  const exists = storedReadBooks.find((idBook) => idBook === bookId);
  if (!exists) {
    storedReadBooks.push(bookId);
    localStorage.setItem("book-read", JSON.stringify(storedReadBooks));
  }
};

export { getStoredReadBook, saveReadBook };
