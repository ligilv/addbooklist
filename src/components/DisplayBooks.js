// import React, { useEffect, useState } from "react";
// // import bookdata from "./dummydata";
// function DisplayBooks({ dataBook }) {
//   const [bookArray, setBookArray] = useState(dataBook);
//   const deleteBook = () => {
//     console.log("delete");
//   };
//   useEffect(() => {
//     console.log("data", bookArray);
//   });
//   return (
//     <>
//       {bookArray.map((item) => {
//         return (
//           <div
//             style={{
//               display: "flex",
//               backgroundColor: "grey",
//               width: "50%",
//               justifyContent: "space-between",
//               marginTop: "20px",
//             }}
//           >
//             <div style={{ display: "flex", flexDirection: "row" }}>
//               <h2>{item.id}</h2> <span>&nbsp;&nbsp;</span>
//               <h2>{item.name}</h2>
//             </div>
//             <div>
//               <button onClick={deleteBook}>delete</button>
//             </div>
//           </div>
//         );
//       })}
//     </>
//   );
// }

// export default DisplayBooks;
