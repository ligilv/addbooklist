import React, { useState } from "react";
// import DisplayBooks from "./DisplayBooks";

function Bookinput() {
  const [bookname, setBookname] = useState("");
  const [bookId, setBookId] = useState("");
  const [dataBook, setBookdata] = useState([]);
  const addBook = () => {
    console.log(dataBook);
    //spread previous array and new book and id
    setBookdata([...dataBook, { id: bookId, name: bookname }]);
  };
  const deleteBook = (e) => {
    console.log("delete", e.target.value);
    // filter out books whos id matches with our id
    setBookdata(dataBook.filter((item) => item.id !== e.target.value));
  };
  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          width: "50%",
          marginLeft: "30px",
        }}
      >
        <input
          type={Text}
          value={bookId}
          placeholder="book id"
          onChange={(e) => setBookId(e.target.value)}
        ></input>

        <input
          style={{ marginTop: "30px" }}
          type={Text}
          value={bookname}
          placeholder="book name"
          onChange={(e) => setBookname(e.target.value)}
        ></input>
        <button onClick={addBook}>add book</button>
      </div>

      {/* BOOK ARRAY MAP */}
      <div style={{ height: "300px", overflow: "auto", width: "50%" }}>
        {dataBook.map((item) => {
          return (
            <div
              style={{
                display: "flex",
                backgroundColor: "#B4ECE3",
                width: "100%",
                justifyContent: "space-between",
                marginTop: "20px",
              }}
            >
              <div style={{ display: "flex", flexDirection: "row" }}>
                <h2>{item.id}</h2> <span>&nbsp;&nbsp;</span>
                <h2>{item.name}</h2>
              </div>
              <div>
                <button onClick={deleteBook} value={item.id}>
                  delete
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Bookinput;
