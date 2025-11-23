import OrderCard from "../components/orders/card/OrderCard";
import useAuthContext from "../hooks/useAuthContext";

const OrderPage = () => {
  const { orders, loading } = useAuthContext();

  return (
    <div className="mx-auto px-4">
    <div className="text-gray-600 text-2xl font-bold mb-3">Total Orders : </div>
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
