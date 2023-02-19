import React, { useState, useEffect } from "react";
import axios from "axios";
import { data } from "./dummy/data";
const Grid = () => {
  const [blogs, setBlogs] = useState([]);

  // useEffect(() => {
  //   axios
  //     .get("https://jsonplaceholder.typicode.com/todos/")
  //     .then((response) => {
  //       setBlogs(response.data.slice(0, 5));
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // }, []);

  useEffect(() => {
    setBlogs(data);
  }, []);

  return (
    <div className="md:flex md:flex-row my-1 md:w-full md:justify-between">
      {blogs.length > 0 && (
        <a
          target="_blank"
          rel="nofollow"
          href={blogs[0].link}
          className="md:flex w-full bg-cover md:h-[410px] md:mr-[10px] md:max-w-[470px] rounded-md"
          style={{ backgroundImage: `url(${blogs[0].image})` }}
        >
          <div className="flex flex-col px-2 pt-2">
            <p className="bg-blue-800 w-fit text-[12px] px-[4px] rounded text-white">
              {blogs[0].tags}
            </p>
            <h2 className="text-lg font-semibold text-white">
              {blogs[0].title}
            </h2>
          </div>
        </a>
      )}
      <div className="flex md:flex-wrap gap-[10px]">
        {blogs.slice(1, 5).map((item, index) => (
          <a
            target="_blank"
            rel="nofollow"
            href={item.link}
            key={index}
            className={` bg-cover h-[200px] md:w-[400px] rounded-md ${
              index < 2 ? "row-1" : "row-2"
            }`}
            style={{ backgroundImage: `url(${item.image})` }}
          >
            <div className="flex flex-col px-2 pt-2">
              <p className="bg-blue-800 w-fit text-[12px] px-[4px] rounded text-white">
                {item.tags}
              </p>
              <h2 className="text-lg font-semibold text-white">{item.title}</h2>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Grid;
