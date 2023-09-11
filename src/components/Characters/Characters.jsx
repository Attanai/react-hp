import axios from "axios";
import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import "./Characters.css";
import Pagination from "./Pagination";
import { Triangle } from "react-loader-spinner";
import 'animate.css';

function Characters() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setcurrentPage] = useState(1);
  const [postsPerPage, setpostsPerPage] = useState(8);

  const fetchData = async () => {
    try {
      setLoading(true);
      const response = await axios.get("https://marauderapi.fr/api/characters");
      setData(response.data.items);
    } catch (error) {
      console.error("Something went wrong, ", error);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;
  const currentPost = data.slice(firstPostIndex, lastPostIndex);

  return (
    <>
      <div className="bg-[#eef3f9] mx-auto ">
        <div className="bg-[#aaaaaa] h-40 flex justify-center items-center">
          <h1 className="tracking-[.3em] text-5xl cssanimation leFlyInTop sequence">Characters</h1>
        </div>
        {loading ? (
          <div className="flex justify-center items-center h-40">
            <Triangle
              height="100"
              width="100"
              color="#000"
              ariaLabel="triangle-loading"
              wrapperStyle={{}}
              wrapperClassName=""
              visible={true}
            />
          </div>
        ) : (
          <div className="flex justify-center items-center my-5">
            <div className="w-[80%]  grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 ">
              {currentPost?.map((val) => (
                <div key={val.id} className="animate__animated animate__flipInY animate__slow">
                  <NavLink to={`/Characters/${val.id}`}>
                    <div className="overflow-hidden rounded-t-lg">
                      <img
                        className="rounded-t-lg w-full h-[300px] object-cover object-top hover:scale-110 duration-300"
                        src={val.picture}
                        alt={val.firstName}
                      />
                    </div>
                  </NavLink>
                  <div className="p-5 bg-white text-center shadow-2xl">
                    <NavLink to={`/Characters/${val.id}`}>
                      <p className="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">
                        {val.firstName} {val.lastName}
                      </p>
                    </NavLink>

                    <p className="mb-3 text-xl font-normal text-gray-700 ">
                      {val.house}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        <Pagination
          totalPosts={data.length}
          postsPerPage={postsPerPage}
          setCurrentPage={setcurrentPage}
          currentPage={currentPage}
        />
      </div>
    </>
  );
}

export default Characters;
