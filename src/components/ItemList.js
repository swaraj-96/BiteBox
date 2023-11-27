import { CDN_URL } from "../../utils/constants";
import { useDispatch } from "react-redux";
import { addItem } from "../../utils/cartSlice";

const ItemList = ({ items }) => {
  console.log(items);

  const dispatch = useDispatch()

  const handleAddItem = (item) => {
      //dispatch an action
      dispatch(addItem(item))
  }

  return (
    <div>
      {items.map((item) => (
        <div
          key={item.card.info.id}
          className=" my-2 py-8 border-b-2 border-gray-200 text-left flex justify-between"
        >
          <div className="w-9/12">
            <div>
              <h4 className="font-semibold text-m">{item.card.info.name}</h4>
              <p className="text-s">₹ {item.card.info.price ? item.card.info.price / 100 :item.card.info.defaultPrice/ 100 }</p>
            </div>
            <p className="text-xs font-normal text-gray-600 mt-2">
              {item.card.info.description}
            </p>
          </div>
          <div className="w-3/12 p-4">
            <div className="absolute ">
              <button
                className="py-2 px-4 text-center mx-16 rounded-lg bg-white text-green-600 shadow-lg font-bold"
                onClick={ () => handleAddItem(item)}
              >
                ADD
              </button>
            </div>
            <img
              className="w-full rounded-md"
              src={CDN_URL + item.card.info.imageId}
            ></img>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
