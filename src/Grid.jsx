import React, { useState, useEffect } from "react";
import axios from "axios";

function Grid() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/todos/")
      .then((response) => {
        setBlogs(response.data.slice(0, 5));
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="md:grid md:grid-cols-5 md:gap-1">
      {blogs.length > 0 && (
        <div className="col-span-1 bg-red-300">{blogs[0].title}</div>
      )}
      <div className="col-span-4 md:grid md:grid-cols-2 gap-1">
        {blogs.slice(1, 5).map((item, index) => (
          <div
            key={index}
            className={`bg-red-300 ${index < 2 ? "row-1" : "row-2"}`}
          >
            {item.title}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Grid;
