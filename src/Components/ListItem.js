import { IMAGE_URL } from "../utils/Common";

const ListItem = ({ lists }) => {
  return (
    <div>
      {lists.map((list) => (
        <div
          key={list?.card?.info?.id}
          className="p-2 m-2 border-gray-200 border-b-2 text-left flex justify-between"
        >
          <div className="w-9/12">
            <div className="py-2">
              <span>{list?.card?.info?.name}</span>
            </div>
            <span>
              - ₹.
              {list.card.info.price
                ? list.card.info.price / 100
                : list.card.info.defaultPrice / 100}
            </span>
            <p className="text-xs">{list?.card?.info?.description}</p>
          </div>
          <div  className="w-3/12 p-4">
            <div className="absolute">
            <button className="p-2 bg-white text-green-500 shadow-lg rounded-lg mx-5 m-auto">Add +</button>
            </div>
            <img
              src={IMAGE_URL + list.card.info.imageId}
             className="rounded-xl w-40"
            ></img>
            
          </div>
        </div>
      ))}
    </div>
  );
};

export default ListItem;
