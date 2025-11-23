import { useState } from "react";
import useAuthContext from "../../../hooks/useAuthContext";
import AuthAPiClient from "../../../services/AuthApiClient";

const DeleteReview = ({ review, product_pk, handleFetch }) => {
  const { user } = useAuthContext();
  const [spiner, setSpiner] = useState(false);

  const handleDelete = async () => {
    setSpiner(true);
    try {
      await AuthAPiClient.delete(
        `api/products/${product_pk}/review/${review.id}/`
      );
      await handleFetch();
    } catch (error) {
      console.log("Error while deleting", error);
    } finally {
      setSpiner(false);
    }
  };

  return (
    <div>
      {review?.user?.id === user?.id &&
        (spiner ? (
          <span className="loading loading-spinner text-error"></span>
        ) : (
          <button
            className="btn btn-soft btn-error"
            onClick={() => handleDelete(review.id)}
          >
            Delete
          </button>
        ))}
    </div>
  );
};

export default DeleteReview;
