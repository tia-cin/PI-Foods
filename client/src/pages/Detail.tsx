import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { getCountryInfo } from "../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { Button } from "../components";

const Detail = () => {
  const dispatch = useDispatch();
  const { detail } = useSelector((state: RootState) => state);
  const { id } = useParams();

  useEffect(() => {
    dispatch<any>(getCountryInfo(String(id)));
  }, [dispatch, id]);
  return (
    <div>
      <div>
        <Button />
        <h1>{detail?.name}</h1>
      </div>
    </div>
  );
};

export default Detail;
