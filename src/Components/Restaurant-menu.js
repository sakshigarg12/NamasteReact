import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";

const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null);
  useEffect(() => {
    fetchMenu();
  }, []);

  const param = useParams();
  console.log(param);

  const fetchMenu = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=27.49870&lng=77.66690&restaurantId=113141&catalog_qa=undefined&submitAction=ENTER"
    );
    const json = await data.json();
    console.log(json);
    setResInfo(json.data);
  };

  if (resInfo === null) return <Shimmer />;

  const { name, slugs, cuisines, avgRatingString, totalRatingsString} =
    resInfo?.cards[0]?.card?.card?.info;

  const { itemCards } =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;

  return (
    <div className="menu">
      <h1>{name}</h1>
      <h4>{cuisines.join(", ")}</h4>
      <h4>
        {slugs.restaurant}, {slugs.city}
      </h4>
      <h5>{avgRatingString}</h5>
      <h5>{totalRatingsString}</h5>
      <h2>Recommended</h2>
      <ul>
          {itemCards.map((item) => (
            <li key={item?.card?.info?.id}>
              {item?.card?.info?.name} -{"Rs. "}
              {item.card.info.price/100 || item.card.info.defaultPrice/100}
            </li>
          ))}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
