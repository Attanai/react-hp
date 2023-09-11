import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./Characters.css";
import { Triangle } from "react-loader-spinner";
import "animate.css";

function Character() {
  const [data, setData] = useState([]);
  const { id } = useParams();
  const [loading, setLoading] = useState(false);

  const fetchData = async () => {
    try {
      setLoading(true);
      const response = await axios.get(
        `https://marauderapi.fr/api/characters/${id}/`
      );
      setData(response.data);
    } catch (error) {
      console.error("Something went wrong, ", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (data.house == "Gryffindor") {
    document.getElementById("house").classList.add("Gryffindor");
  } else if (data.house == "Slytherin") {
    document.getElementById("house").classList.add("Slytherin");
  } else if (data.house == "Ravenclaw") {
    document.getElementById("house").classList.add("Ravenclaw");
  } else if (data.house == "Hufflepuff") {
    document.getElementById("house").classList.add("Hufflepuff");
  }

  return (
    <>
      <div className=" bg-white mx-auto ">
        <div
          id="house"
          className="bg-[#aaaaaa] h-40 flex justify-center items-center"
        >
          <h1 className="tracking-[.3em] text-5xl animate__animated animate__tada animate__slow">
            {data.house}
          </h1>
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
          <div className="flex justify-center items-center my-5 mx-10">
            <div className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row  hover:bg-gray-100 animate__animated animate__zoomIn animate__slow">
              <img
                className="object-cover object-top w-full md:w-96 rounded-t-lg h-96 md:rounded-none md:rounded-l-lg"
                src={data.picture}
                alt={data.firstName}
              />
              <div className="flex flex-col items-center p-4 leading-normal md:w-[500px]">
                <ul className="max-w-md space-y-1 text-gray-500 text-3xl ">
                  <li>
                    {data.firstName} {data.lastName}
                  </li>
                  <li>{data.genre}</li>
                  <li>{data.blood}</li>
                  <li>{data.house}</li>
                  <li>{data.alive}</li>
                </ul>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default Character;
