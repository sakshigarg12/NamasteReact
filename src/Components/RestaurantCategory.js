import { useState } from "react";
import ListItem from "./ListItem";

const RestaurantCategory = ({ data, showItems, setShowIndex }) => {
  // const [showItems, setShowItems] = useState(false);
  const handleClick = () => {
    // setShowItems(!showItems);
    setShowIndex();
  }
  return (
    <div>
      {/* {Accordian Header} */}
      <div className="w-6/12 mx-auto my-4 bg-gray-50 shadow-lg p-4">
        <div className=" flex justify-between cursor-pointer" onClick={handleClick}>
          <span className="text-lg font-bold">
            {data.title} ({data?.itemCards?.length})
          </span>
        </div>
        {showItems && <ListItem lists={data?.itemCards} />}
      </div>
      {/* {Accordian Body} */}
    </div>
  );
};

export default RestaurantCategory;
