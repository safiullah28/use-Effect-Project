import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";

const UseEffect = () => {
  const [userdata, setuserData] = useState([]);
  const getUsersdata = async () => {
    const response = await axios.get(`https://jsonplaceholder.typicode.com/albums/1/photos`)
    console.log(response);
    const data=await response.data;
    setuserData(data);
  };
  useEffect(() => {
    getUsersdata();
  }, []);
  return (
    <>
      <h2>List of GitHub Users</h2>
      <div className="conainer-fluid mt-5">
        <div className="row text-center">
          {userdata.map((element, index) => {
            return (
              <div key={index}>
                <div className="col-10 col-md-4 mt-5">
                  <div className="card p-2">
                    <div className="d-flex align-items-center">
                      <div className="image">
                        <img alt={element.thumbnailUrl} className="rounded" width="155" />
                      </div>
                      <div className="ml-3 w-100">
                        <h4 className="mb-0 mt-0 textLeft">{element.title}</h4>
                        <span className="textLeft"></span>
                        <div className="p-2 mt-2 bg-primary d-flex justify-content-between rounded text-white stats">
                          <div className="d-flex flex-column">
                            <span className="articles">Articles</span>
                            <span className="number1">38</span>
                          </div>
                          <div className="d-flex flex-column">
                            <span className="followers">Followers</span>
                            <span className="number2">980</span>
                          </div>
                          <div className="d-flex flex-column">
                            <span className="rating">Rating</span>
                            <span className="number"></span>8.9
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default UseEffect;
