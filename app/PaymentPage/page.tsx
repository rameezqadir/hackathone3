import React from "react";

const PaymentForm = () => {
  return (
    <div className="flex flex-col md:flex-row gap-8 max-w-5xl mx-auto p-6">
      {/* Payment Method Section */}
      <div className="w-full md:w-1/2 border rounded-lg p-6 bg-white shadow-md">
        <h2 className="text-lg font-semibold mb-4">Payment Method</h2>
        <form className="space-y-4">
          {/* Credit Card */}
          <div>
            <input
              type="radio"
              id="credit-card"
              name="payment"
              defaultChecked
              className="mr-2"
            />
            <label htmlFor="credit-card" className="font-medium">
              Credit Card
            </label>
            <div className="mt-4 space-y-3">
              <input
                type="text"
                placeholder="Card Number"
                className="w-full border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <div className="flex gap-2">
                <input
                  type="text"
                  placeholder="Expiration Date"
                  className="w-1/2 border rounded-md p-2"
                />
                <input
                  type="text"
                  placeholder="CVC"
                  className="w-1/2 border rounded-md p-2"
                />
              </div>
              <input
                type="text"
                placeholder="Card Holder"
                className="w-full border rounded-md p-2"
              />
            </div>
          </div>
          {/* PayPal */}
          <div>
            <input type="radio" id="paypal" name="payment" className="mr-2" />
            <label htmlFor="paypal" className="font-medium flex items-center">
              PayPal
              <img
                src="PayPal.svg"
                alt="PayPal"
                className="h-5 ml-2"
              />
            </label>
          </div>
          {/* Bitcoin */}
          <div>
            <input type="radio" id="bitcoin" name="payment" className="mr-2" />
            <label htmlFor="bitcoin" className="font-medium flex items-center">
              Bitcoin
              <img
                src="Bitcoin.svg"
                alt="Bitcoin"
                className="h-5 ml-2"
              />
            </label>
          </div>
        </form>
      </div>

      {/* Confirmation Section */}
      <div className="w-full md:w-1/2 border rounded-lg p-6 bg-white shadow-md">
        <h2 className="text-lg font-semibold mb-4">Confirmation</h2>
        <div className="space-y-4">
          {/* Checkbox: Newsletter */}
          <div>
            <input type="checkbox" id="newsletter" className="mr-2" />
            <label htmlFor="newsletter" className="text-gray-700">
              I agree with sending marketing and newsletter emails. No spam,
              promised!
            </label>
          </div>
          {/* Checkbox: Terms */}
          <div>
            <input type="checkbox" id="terms" className="mr-2" />
            <label htmlFor="terms" className="text-gray-700">
              I agree with our{" "}
              <a href="#" className="text-blue-600 underline">
                terms and conditions and privacy policy
              </a>
              .
            </label>
          </div>
          {/* Submit Button */}
          <button className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition">
            Rent Now
          </button>
          {/* Data Security */}
          <div className="flex items-center mt-4 text-gray-600 text-sm">
            <span className="mr-2">🛡</span> All your data are safe. We are using
            the most advanced security to provide you the best experience ever.
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentForm;
