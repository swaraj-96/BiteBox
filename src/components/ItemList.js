import { CDN_URL } from "../../utils/constants";
import { useDispatch } from "react-redux";
import { addItem } from "../../utils/cartSlice";
import toast, {Toaster} from "react-hot-toast";

const ItemList = ({ items }) => {
  console.log(items);

  const dispatch = useDispatch();

  

  const handleAddItem = (item) => {
    //dispatch an action
    dispatch(addItem(item));
     toast.success("Item Added to Cart!")
    
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
              className="p-2 py-8 flex gap-4 md:gap-8 justify-between items-center border-b dark:border-b-gray-700"
            >
              <div className="basis-8/12 space-y-2 ">
                <h2 className="text-base font-semibold dark:text-white">
                  {item?.card?.info?.name}
                </h2>
                <p className="text-xs font-semibold dark:text-[#FAFAFA]">₹ {itemPrice / 100}</p>
                <p className="text-xs  md:block dark:text-slate-400">
                  {item?.card?.info?.description}
                </p>
              </div>

              <div className="w-full basis-4/12 relative">
                <img
                  src={CDN_URL + item?.card?.info?.imageId}
                  className="w-full  h-32  aspect-video object-cover rounded-md "
                  alt=""
                />
                <button
                  className="bg-btnTheme text-white hover:bg-appTheme hover:text-black font-bold md:p-2 p-1 md:px-6 px-4 rounded-md absolute shadow-md  -bottom-5 -translate-x-[-23%] md:-translate-x-[-30%] md:left-[20%] dark:bg-[#3758F9] dark:hover:text-white dark:hover:bg-blue-800 dark:active:bg-blue-900 dark:focus:outline-none dark:focus:ring dark:focus:ring-blue-300"
                  onClick={() => handleAddItem({ ...item, itemPrice })}
                  
                >
                  ADD
                </button>
                <Toaster/>
              </div>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default ItemList;
