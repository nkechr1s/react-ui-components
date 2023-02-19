import React, { useState, useEffect } from "react";
import axios from "axios";

const Grid = () => {
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
    <div className="md:flex md:flex-row my-1 md:w-full md:justify-between">
      {blogs.length > 0 && (
        <div className="md:flex w-full bg-[url('./assets/image.webp')] bg-cover md:h-[410px] md:mr-[10px] max-w-[470px] rounded-md">
          <h2 className="text-lg font-semibold px-2">{blogs[0].title}</h2>
        </div>
      )}
      <div className="flex md:flex-wrap gap-[10px]">
        {blogs.slice(1, 5).map((item, index) => (
          <div
            key={index}
            className={`bg-[url('./assets/image.webp')] bg-cover h-[200px] md:w-[400px] rounded-md ${
              index < 2 ? "row-1" : "row-2"
            }`}
          >
            <h2 className="text-lg font-semibold px-2"> {item.title} </h2>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Grid;
