import Link from "next/link";
export default function RentalSummary() {
    return (
      <div className="min-h-screen bg-gray-100 p-4">
        <div className="max-w-5xl mx-auto bg-white shadow-lg rounded-lg p-6">
          {/* Title */}
          <h1 className="text-2xl font-bold mb-4 text-center">Car Rental Checkout</h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Rental Summary */}
            <div className="border p-4 rounded-md shadow-sm">
              <h2 className="text-lg font-semibold mb-2">Rental Summary</h2>
              <div className="flex items-center space-x-4 mb-2">
                <img
                  src="/Civic.png" // Placeholder image
                  alt="HOnda Civic 2024"
                  className="w-24 h-16 object-cover rounded-md"
                />
                <div>
                  <p className="font-medium">Honda Civic 2024</p>
                  <p className="text-sm text-gray-500">⭐⭐⭐⭐⭐ 440+ Reviews</p>
                </div>
              </div>
              <div className="flex justify-between">
                <span>Subtotal:</span>
                <span>Rs. 7000</span>
              </div>
              <div className="flex justify-between">
                <span>Tax:</span>
                <span>Rs 0.00</span>
              </div>
              <hr className="my-2" />
              <div className="flex justify-between font-bold">
                <span>Total Rental Price:</span>
                <span>Rs 7000.00</span>
              </div>
            </div>
  
            {/* Billing Information */}
            <div className="border p-4 rounded-md shadow-sm">
              <h2 className="text-lg font-semibold mb-4">Billing Info</h2>
              <form className="space-y-4">
                <div>
                  <label className="block text-gray-700">Name</label>
                  <input
                    type="text"
                    placeholder="Your name"
                    className="w-full border rounded-md p-2"
                  />
                </div>
                <div>
                  <label className="block text-gray-700">Address</label>
                  <input
                    type="text"
                    placeholder="Your address"
                    className="w-full border rounded-md p-2"
                  />
                </div>
                <div>
                  <label className="block text-gray-700">Phone Number</label>
                  <input
                    type="text"
                    placeholder="Your phone number"
                    className="w-full border rounded-md p-2"
                  />
                </div>
                <div>
                  <label className="block text-gray-700">Town / City</label>
                  <input
                    type="text"
                    placeholder="Town or city"
                    className="w-full border rounded-md p-2"
                  />
                </div>
                <Link href="./RentalPage"><button
                  type="submit"
                  className="w-full bg-blue-500 text-white rounded-md p-2 hover:bg-blue-600"
                >
                  Submit
                </button></Link>
              </form>
            </div>
          </div>
        </div>
       
      </div>
    );
  }
 
  