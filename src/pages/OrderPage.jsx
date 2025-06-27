import OrderCard from "../components/orders/card/OrderCard";
import useAuthContext from "../hooks/useAuthContext";

const OrderPage = () => {
  const { orders, loading } = useAuthContext();

  return (
    <div className=" bg-gray-200  mx-auto px-4 py-12 sm:py-10">
      {loading && <span>Loading</span>}
      {orders?.map((order) => (
        <div key={order.id}>
          <OrderCard order={order} />
        </div>
      ))}
    </div>
  );
};

export default OrderPage;
