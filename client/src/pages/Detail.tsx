import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { getCountryInfo } from "../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/store";

const Detail = () => {
  const dispatch = useDispatch();
  const { detail } = useSelector((state: RootState) => state);
  const { id } = useParams();

  useEffect(() => {
    dispatch<any>(getCountryInfo(String(id)));
  }, [dispatch, id]);
  console.log(detail);
  return (
    <div>
      {detail && (
        <div className="p-5">
          <div className="flex justify-around">
            <div className="w-600 ">
              <p className="text-8xl font-bold">{detail.name}</p>
              <p className="mt-5 text-5xl font-semibold">{detail.capital}</p>
              <p className="mt-5 text-3xl font-medium">
                Continent: {detail.continent}
              </p>
              <p className="mt-5 text-3xl font-medium capitalize">
                Status: {detail.status}
              </p>
            </div>
            <img
              src={detail.flag}
              className="w-500 h-full object-cover rounded-xl"
            />
          </div>
          <div className="flex justify-around">
            <div>
              <p className="mt-5 text-2xl font-medium">
                Area: {detail.area}km<sup>2</sup>
              </p>
              <p className="mt-5 text-2xl font-medium">
                Population: {detail.population}
              </p>
              <p className="mt-5 text-2xl font-medium">
                Region: {detail.region}
              </p>
              <p className="mt-5 text-2xl font-medium">
                Subregion: {detail.subregion}
              </p>
            </div>
            {detail.activities.length && (
              <div>
                <p className="mt-5 text-2xl font-medium">Activities:</p>
                <div className="grid grid-cols-2">
                  {detail.activities.map((a, i) => (
                    <div
                      key={i}
                      className="bg-blue-400 rounded-xl p-2 m-2 w-300"
                    >
                      <div className="flex justify-between">
                        <div>
                          <p className="capitalize text-lg font-semibold">
                            {a.name}
                          </p>
                          <p>Difficulty: </p>
                        </div>
                        <div>
                          <p>
                            Duration:{" "}
                            {`${a.duration}${a.duration <= 30 ? "h" : "m"}`}
                          </p>
                          <p className="capitalize">Best Season: {a.season}</p>
                        </div>
                      </div>
                      <input
                        className="w-full"
                        type="range"
                        min="0"
                        max="5"
                        value={a.difficulty}
                      />
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Detail;
