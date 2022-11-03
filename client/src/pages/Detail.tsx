import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { getRecipeDetail } from "../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { Button } from "../components";

function Detail() {
  const dispatch = useDispatch();
  const { recipeDetail } = useSelector((state: RootState) => state);
  const { id } = useParams();

  useEffect(() => {
    dispatch<any>(getRecipeDetail(Number(id)));
  }, [dispatch, id]);
  return (
    <div>
      <div>
        <Button />
        <h1>{recipeDetail?.name}</h1>
      </div>
      {recipeDetail ? (
        <div>
          <span>Diets:</span>
          <p>{recipeDetail.diets ? recipeDetail.diets.join(", ") : null}</p>
          <span>Summary: </span>
          <p>{recipeDetail.summary}</p>
          <span>Score: </span>
          <p>{recipeDetail.score}</p>
          <span>Health score: </span>
          <p>{recipeDetail.health_score}</p>
          <span>Instructions: </span>
          <p>{recipeDetail.instructions}</p>
          <img src={recipeDetail.image} alt={recipeDetail.name} />
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default Detail;
