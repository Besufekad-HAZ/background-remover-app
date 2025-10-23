const PaymentFailed = () => {
  return (
    <div className="mt-20 flex min-h-screen flex-col items-center">
      <h1 className="text-2xl font-bold text-red-600">Payment Failed</h1>
      <br />
      <p className="mt-2">
        There was an issue processing your payment. Please try again.
      </p>
      {/* Add a button to navigate back to the purchase page */}
    </div>
  );
};

export default PaymentFailed;
