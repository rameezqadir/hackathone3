import Link from "next/link";
export default function RentalPage() {
    return (
      <div className="min-h-screen bg-gray-100 p-4">
        <div className="max-w-5xl mx-auto bg-white shadow-lg rounded-lg p-6">
          {/* Title */}
          <h1 className="text-2xl font-bold mb-6 text-center">Car Rental Information</h1>
  
          <div className="grid grid-cols-1 md:grid-cols-3gap-6">
            {/* Rental Info */}
            <div className="border p-4 rounded-md shadow-sm">
              <h2 className="text-lg font-semibold mb-4">Rental Info</h2>
              
              {/* Pick-Up Section */}
              <div className="mb-4">
                <h3 className="font-medium mb-2">📍 Pick-Up</h3>
                <div className="space-y-2">
                  <input
                    type="text"
                    placeholder="Select your city"
                    className="w-full border rounded-md p-2"
                  />
                  <input
                    type="text"
                    placeholder="Select your time"
                    className="w-full border rounded-md p-2"
                  />
                  <input
                    type="date"
                    className="w-full border rounded-md p-2"
                  />
                </div>
              </div>
  
              {/* Drop-Off Section */}
              <div>
                <h3 className="font-medium mb-2">🚗 Drop-Off</h3>
                <div className="space-y-2">
                  <input
                    type="text"
                    placeholder="Select your city"
                    className="w-full border rounded-md p-2"
                  />
                  <input
                    type="date"
                    className="w-full border rounded-md p-2"
                  />
                </div>
              </div>
           
  
            {/* Payment Method */}
            
  
                <Link href="./PaymentPage"><button
                  type="submit"
                  className="w-full bg-blue-500 text-white rounded-md p-2 hover:bg-blue-600"
                >
                  Confirm
                </button></Link>
              
            </div>
          </div>
        </div>
      </div>
    );
  }