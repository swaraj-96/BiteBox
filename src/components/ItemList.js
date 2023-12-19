import { CDN_URL } from "../../utils/constants";
import { useDispatch } from "react-redux";
import { addItem } from "../../utils/cartSlice";

const ItemList = ({ items }) => {
  console.log(items);

  const dispatch = useDispatch();

  const handleAddItem = (item) => {
    //dispatch an action
    dispatch(addItem(item));
  };

  return (
    <>
      <ul className="">
        {items.map((item) => {
          const itemPrice =
            item?.card?.info?.price || item?.card?.info?.defaultPrice;
          return (
            <li
              key={item?.card?.info?.id}
              className="p-2 py-8 flex gap-4 md:gap-8 justify-between items-center border-b"
            >
              <div className="basis-8/12 space-y-2">
                <h2 className="text-base font-semibold">
                  {item?.card?.info?.name}
                </h2>
                <p className="text-xs font-semibold">
                  ₹ {itemPrice/100}
                </p>
                <p className="text-xs hidden md:block">
                  {item?.card?.info?.description}
                </p>
              </div>

              <div className="w-full basis-4/12 relative">
                <img
                  src={CDN_URL + item?.card?.info?.imageId}
                  className="w-full h-32 aspect-video object-cover rounded-md"
                  alt=""
                />
                <button
                  className="bg-white text-orange-500 hover:bg-orange-500 hover:text-white font-bold p-2 px-6 rounded-md absolute shadow-md left-[10%] -bottom-5 -translate-x[-50%] md:left-[35%]"
                  onClick={() => handleAddItem({...item, itemPrice})}
                >
                  ADD
                </button>
              </div>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default ItemList;
