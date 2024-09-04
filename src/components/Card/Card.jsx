import { Link } from "react-router-dom";
import "./Card.css";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addFav, removeFav } from "../../redux/actions";

/* eslint-disable react/prop-types */
export default function Card({
  name,
  status,
  species,
  gender,
  origin,
  image,
  onClose,
  id,
}) {
  const [isFav, setIsFav] = useState(false);

  const dispatch = useDispatch();
  const myFavorites = useSelector((state) => state.myFavorites) || [];
  const handleFavorite = () => {
    if (isFav === true) {
      setIsFav(false)
      dispatch(removeFav(id));
    } 
     if(isFav === false) {
      setIsFav(true)
      dispatch(addFav({ id, name, status, species, gender, origin, image }));
    }
  };
  useEffect(() => {
   myFavorites.forEach((fav) => {
       if (fav.id === id) {
           setIsFav(true);
       }
   });
}, [myFavorites, id]);
  return (
    <div className="card">
      <Link to={`/detail/${id}`}>
        <h2 className="card-name">{name}</h2>
      </Link>
      <button className="card-button" onClick={() => onClose(id)}></button>

      <h2> Species: {species} </h2>
      <h2> Gender: {gender} </h2>
      <img src={image} alt="" />
      {isFav ? (
         <button className="favButton" onClick={handleFavorite}>❤️</button>
         ) : (
            <button className="favButton" onClick={handleFavorite}>🤍</button>
            )}
    </div>
  );
}
