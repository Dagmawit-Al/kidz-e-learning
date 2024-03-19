import React from "react";
import { useParams } from "react-router-dom";

function LearnBook() {
  const { bookId } = useParams();
  return <div>Learn book, {bookId}</div>;
}

export default LearnBook;
