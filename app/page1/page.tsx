import { Utensils, ShoppingCart, Bed } from "lucide-react"

export default function Page1() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Main Content - Tourist Needs */}
      <main className="max-w-4xl mx-auto p-8">
        <h1 className="text-2xl font-bold mb-8 text-center">Tourist Needs</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          {/* Left side - Restaurants Icon */}
          <div className="flex justify-center">
            <div className="border-2 border-black p-6 rounded-lg bg-white shadow-sm">
              <Utensils size={60} className="text-black" />
            </div>
          </div>

          {/* Right side - Restaurants Content */}
          <div className="text-sm leading-relaxed">
            <div className="bg-white p-4 border-2 border-black shadow-sm">
              <h3 className="font-bold mb-2">Restaurants</h3>
              <p>
                Taniti currently has 10 restaurants: five serve mostly local fish and rice, three serve American-style
                meals, and two serve Pan-Asian cuisine.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Content */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="text-sm leading-relaxed">
            <div className="bg-white p-4 border-2 border-black shadow-sm">
              <h3 className="font-bold mb-2">Grocery Stores</h3>
              <p>
                Taniti has two supermarkets, two smaller grocery stores, and one convenience store that is open 24 hours
                a day.
              </p>
            </div>
          </div>

          <div className="flex justify-center">
            <div className="border-2 border-black p-6 rounded-lg bg-white shadow-sm">
              <ShoppingCart size={60} className="text-black" />
            </div>
          </div>
        </div>

        {/* Lodging Section */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="flex justify-center">
            <div className="border-2 border-black p-6 rounded-lg bg-white shadow-sm">
              <Bed size={60} className="text-black" />
            </div>
          </div>

          <div className="text-sm leading-relaxed">
            <div className="bg-white p-4 border-2 border-black shadow-sm">
              <h3 className="font-bold mb-2">Lodging</h3>
              <p>
                Taniti has a wide variety of lodging that ranges from an inexpensive hostel to one large, four-star
                resort. There are many small, family-owned hotels and a growing number of bed and breakfasts.
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
