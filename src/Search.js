// import React, { useState } from "react";
// import "./Weather.css";

// export default function Search() {
//     const [city, setCity] = useState("");
//     const [text, setText] = useState("");

//     function handleSubmit(event) {
//         event.preventDefault();
//         if (city.length > 0) {
//             setText(`It is currently 27°C in ${city}`);
//         } else {
//             alert("Enter a city");
//         }
//     }

//     function updateCity(event) {
//         setCity(event.target.value);
//     }

//     return (
//         <div className="form-enter">
//             <form onSubmit={handleSubmit}>
//                 <input
//                     type="text"
//                     placeholder="Enter city"
//                     className="input-field"
//                     onChange={updateCity}
//                 />
//                 <button>Search</button>
//             </form>
//             <br />
//             <h4 className="text-message">{text}</h4>
//         </div>
//     );
// }
