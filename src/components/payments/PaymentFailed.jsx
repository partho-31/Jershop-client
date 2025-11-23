import { FaTimesCircle } from "react-icons/fa";

const PaymentFailed = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
      <div className="text-center max-w-md">
        <FaTimesCircle className="mx-auto h-16 w-16 text-red-500 mb-4" />
        <h1 className="text-2xl font-bold text-gray-800 mb-2">
          Payment Failed
        </h1>
        <p className="text-gray-600 mb-6">
          Unfortunately, your transaction could not be completed. <br />
          Please try again or contact support.
        </p>
      </div>
    </div>
  );
};

export default PaymentFailed;
