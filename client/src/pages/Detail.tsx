import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { getCountryInfo } from "../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { GrLocationPin } from "react-icons/gr";
import { IoPaperPlaneOutline } from "react-icons/io5";
import unitedNations from "../assets/united-nations-png.png";
import island from "../assets/island.png";
import independent from "../assets/independent.png";
import official from "../assets/official.png";
import { Button } from "../components";

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
          <div className="flex justify-between">
            <div className="mr-5">
              <p className="text-5xl font-bold flex">
                {detail.name}
                {detail.status.includes("officially") && (
                  <img
                    src={official}
                    alt="officially-assigned"
                    title="Officially Assigned"
                    className="w-5 h-5 mt-2 ml-2"
                  />
                )}
              </p>
              <p className="mt-3 text-lg text-gray-600 font-medium italic">
                {detail.official}
              </p>
              <p className="mt-5 text-2xl font-semibold flex items-center">
                <GrLocationPin title="Capital" />
                {detail.capital}
              </p>
              <div className="flex items-center justify-between">
                {detail.unMember && (
                  <img
                    src={unitedNations}
                    alt="united-nations-logo"
                    title="United Nations Member"
                    className="w-12 h-12 mt-5 ml-2"
                  />
                )}
                {detail.landlocked && (
                  <img
                    src={island}
                    alt="island-image"
                    title="LandLocked Country"
                    className="w-12 h-12 mt-5 ml-2"
                  />
                )}
                {detail.independent && (
                  <img
                    src={independent}
                    alt="independence-image"
                    title="Independent Nation"
                    className="w-12 h-12 mt-5 ml-2"
                  />
                )}
              </div>
            </div>
            <div className="mr-5">
              <p
                className="mt-5 text-xl font-medium flex items-center cursor-pointer"
                onClick={() => window.open(detail.map, "_blank")}
              >
                Visit{" "}
                <IoPaperPlaneOutline className="translate-y-1 hover:translate-x-1 hover:-translate-y-1 transition-all" />
              </p>
              <p className="mt-5 text-xl font-medium">
                Continent: {detail.continent}
              </p>
              <p className="mt-5 text-xl font-medium">
                Region: {detail.region}
              </p>
              <p className="mt-5 text-xl font-medium">
                Subregion: {detail.subregion}
              </p>
            </div>
            <div className="mr-5">
              <p className="mt-5 text-xl font-medium">
                Area: {detail.area}km<sup>2</sup>
              </p>
              <p className="mt-5 text-xl font-medium">
                Population: {detail.population}
              </p>
              <p className="mt-5 text-xl font-medium">
                Timezone: {detail.timezone}
              </p>
            </div>

            <img
              src={detail.flag}
              className="w-200 h-200 object-cover rounded-xl"
            />
          </div>
          {detail.activities.length > 0 ? (
            <div>
              <p className="mt-5 text-2xl font-medium">Activities:</p>
              <div className="grid grid-cols-2">
                {detail.activities.map((a, i) => (
                  <div
                    key={i}
                    className="bg-blue-400 rounded-xl p-2 my-2 w-300"
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
          ) : (
            <div className="flex flex-col items-center justify-center mt-10">
              <p className="text-2xl font-semibold text-center">
                There's no activities yet!
              </p>
              <p className="text-center mt-2 text-lg text-gray-600 font-medium italic">
                Add them here
              </p>
              <Button
                text="Create Activity"
                style="mt-2 px-2 hover:bg-blue-700 transition-all drop-shadow-lg"
                handle={() => window.open("/create", "_self")}
              />
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Detail;
