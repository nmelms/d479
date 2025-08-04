import { Mail } from "lucide-react"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-50">

      {/* Main Content */}
      <main className="max-w-4xl mx-auto p-8">
        {/* Email Icon */}
        <div className="flex justify-center mb-8">
          <div className="border-2 border-black p-8 rounded-lg bg-white shadow-sm hover:shadow-md hover:scale-105 transition-all duration-300">
            <Mail size={80} className="text-black" />
          </div>
        </div>

        <div className="max-w-2xl mx-auto text-sm leading-relaxed">
          <div className="bg-white p-6 shadow-sm hover:shadow-md transition-shadow duration-300">
            <h1 className="text-2xl font-bold mb-4 text-center">Welcome to Taniti</h1>
            <p className="mb-4">
              Taniti is a small, tropical island in the Pacific. While the island has an area of less than 500 square
              miles, the terrain is varied and includes both sandy and rocky beaches, a small but safe harbor, lush
              tropical rainforests, and a mountainous interior that includes a small, active volcano.
            </p>
            <p>
              Taniti has an indigenous population of about 20,000. Until a recent increase in tourism, most of the
              Tanitian economy was dominated by fishing or agriculture. Discover what this beautiful island has to
              offer!
            </p>
          </div>
        </div>
      </main>
    </div>
  )
}
