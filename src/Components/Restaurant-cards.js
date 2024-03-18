import { IMAGE_URL } from "../utils/Common";

const RestaurantCard = (props) => {
    const {resData} = props;
    const {name,cloudinaryImageId,cuisines,avgRatingString,sla ,costForTwo} = resData.info;
    return(
      <div className="res-card" style={{backgroundColor: "grey"}}>
        <img className="res-logo" alt="res-logo" src={IMAGE_URL+cloudinaryImageId}></img>
        <h3>{name}</h3>
        <h4>{cuisines.join(", ")}</h4>
        <h4>{avgRatingString}</h4>
        <h4>{sla.slaString}</h4>
        <h4>{costForTwo}</h4>
      </div>
    );
  }

  export default RestaurantCard;