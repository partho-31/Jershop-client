import useCartContext from "../../hooks/useCartContext";
import { useState } from "react";
import { FaTrashAlt } from "react-icons/fa";

const DeleteCartItem = ({ id }) => {
  const { deleteCartItem } = useCartContext();
  const [spiner, setSpiner] = useState(false);

  const deleteItem = async () => {
    setSpiner(true);
    try {
      await deleteCartItem(id);
    } finally {
      setSpiner(false);
    }
  };

  return (
    <div>
      <button
        onClick={deleteItem}
        className="ml-auto text-red-400 hover:text-red-500"
      >
        {spiner ? (
          <span className="loading loading-spinner text-error"></span>
        ) : (
          <FaTrashAlt />
        )}
      </button>
    </div>
  );
};

export default DeleteCartItem;
