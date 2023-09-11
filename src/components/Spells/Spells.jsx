import axios from "axios";
import React, { useEffect, useState } from "react";
import { Triangle } from "react-loader-spinner";
import "./Spells.css";
import "animate.css";

function Spells() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchData = async () => {
    try {
      setLoading(true);
      const response = await axios.get("https://marauderapi.fr/api/spells");
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

  return (
    <>
      <div className=" bg-[#eef3f9] mx-auto ">
        <div className="bg-[#aaaaaa] h-40 flex justify-center items-center">
          <h1 className="tracking-[.3em] text-5xl cssanimation leFlyInBottom sequence">Spells</h1>
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
          <div className="flex justify-center items-center mx-5 py-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 w-[90%]">
              {data.map((val) => (
                <div
                  key={val.id}
                  className="m-2 bg-white border border-gray-400 rounded-lg hover:shadow-xl hover:border-opacity-0 transform hover:-translate-y-1 transition-all duration-200 animate__animated animate__flipInX animate__slow"
                >
                  <div className="m-3">
                    <h2 className="text-lg mb-2">
                      {val.name}
                      <span className="text-sm text-[#4c7273] font-mono bg-[#86b9b0] bg-opacity-50 inline rounded-full px-2 align-top float-right animate-pulse">
                        Spell
                      </span>
                    </h2>
                    <p className="font-light font-mono text-sm text-gray-700 hover:text-gray-900 transition-all duration-200">
                      {val.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default Spells;
