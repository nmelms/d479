import { Camera, MapPin, Plane } from "lucide-react"

export default function Page2() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Removed Navigation component since it's now in layout */}

      {/* Main Content - Activities & Transportation */}
      <main className="max-w-4xl mx-auto p-8">
        <h1 className="text-2xl font-bold mb-8 text-center">Activities & Transportation</h1>

        <div className="space-y-6">
          {/* Entertainment Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
            <div className="flex justify-center">
              <div className="border-2 border-black p-4 rounded-lg bg-white shadow-sm">
                <Camera size={40} className="text-black" />
              </div>
            </div>
            <div className="text-sm leading-relaxed">
              <div className="bg-white p-4 border-2 border-black shadow-sm">
                <h3 className="font-bold mb-2">Entertainment</h3>
                <p>
                  Most people visit Taniti to enjoy the beaches, explore the rainforest, and visit the volcano. Other
                  activities include visiting a local history museum, chartered fishing tours, snorkeling, zip-lining,
                  visiting pubs and a microbrewery, dancing, movies, helicopter rides, arcade, art galleries, and
                  bowling.
                </p>
              </div>
            </div>
          </div>

          {/* Sightseeing Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
            <div className="flex justify-center">
              <div className="border-2 border-black p-4 rounded-lg bg-white shadow-sm">
                <MapPin size={40} className="text-black" />
              </div>
            </div>
            <div className="text-sm leading-relaxed">
              <div className="bg-white p-4 border-2 border-black shadow-sm">
                <h3 className="font-bold mb-2">Sightseeing</h3>
                <p>
                  Most tourists spend time in Taniti City, which boasts native architecture and nearby white, sandy
                  beaches that encircle Yellow Leaf Bay. Popular activities include boat or bus tours, rainforest hikes,
                  and volcano visits.
                </p>
              </div>
            </div>
          </div>

          {/* Transportation Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
            <div className="flex justify-center">
              <div className="border-2 border-black p-4 rounded-lg bg-white shadow-sm">
                <Plane size={40} className="text-black" />
              </div>
            </div>
            <div className="text-sm leading-relaxed">
              <div className="bg-white p-4 border-2 border-black shadow-sm">
                <h3 className="font-bold mb-2">Transportation</h3>
                <p>
                  Almost all visitors arrive by air via a small airport. Public buses serve Taniti City (5 a.m. to 11
                  p.m.), private buses serve the rest of the island. Taxis, rental cars, and bikes are available.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
