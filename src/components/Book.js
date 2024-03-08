import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

function Book() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const { id } = useParams();
  return <div>This is book, {id} </div>;
}

export default Book;
