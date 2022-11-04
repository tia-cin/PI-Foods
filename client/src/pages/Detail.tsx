import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { getCountryInfo } from "../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { Button, Titles } from "../components";

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
        <div>
          <div className="flex justify-center">
            <img
              src={detail.flag}
              className="w-200 h-full object-cover rounded-xl"
            />
            <Titles title={detail.name} subtitle={detail.capital} />
          </div>
          <div className="flex justify-around">
            <Titles title="Area" subtitle={detail.area} />
            <Titles title="Continent" subtitle={detail.continent} />
            <Titles title="Population" subtitle={String(detail.population)} />
            <Titles title="Region" subtitle={detail.region} />
            <Titles title="Subregion" subtitle={detail.subregion} />
            <Titles title="Status" subtitle={detail.status} />
          </div>
          {detail.activities.length && (
            <div>
              <Titles title="Activities" subtitle="" />
              <div className="grid grid-cols-4">
                {detail.activities.map((a, i) => (
                  <div key={i}>
                    <p>{a.name}</p>
                    <p>{`${a.duration}${a.duration <= 30 ? "h" : "m"}`}</p>
                    <input type="range" min="0" max="5" value={a.difficulty} />
                    <p>Preferable to do on {a.season}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Detail;
