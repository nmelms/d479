export default function Page3() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Removed Navigation component since it's now in layout */}

      {/* Main Content - Travel Information */}
      <main className="max-w-4xl mx-auto p-8">
        <h1 className="text-2xl font-bold mb-8 text-center">Travel Information</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left side - Content */}
          <div className="text-sm leading-relaxed">
            <div className="bg-white p-6 shadow-sm">
              <h3 className="font-bold mb-4">Important Information</h3>
              <ul className="space-y-2">
                <li>
                  <strong>Power:</strong> 120 volts (same as United States)
                </li>
                <li>
                  <strong>Alcohol:</strong> Not served between midnight and 9:00 a.m.
                </li>
                <li>
                  <strong>Drinking age:</strong> 18 years old
                </li>
                <li>
                  <strong>Language:</strong> Many younger Tanitians speak English
                </li>
                <li>
                  <strong>Healthcare:</strong> One hospital and several clinics with multilingual staff
                </li>
                <li>
                  <strong>Safety:</strong> Violent crime is very rare, but watch for pickpocketing
                </li>
                <li>
                  <strong>Currency:</strong> U.S. dollar, but euros and yen accepted
                </li>
                <li>
                  <strong>Holidays:</strong> Many national holidays may affect attraction hours
                </li>
              </ul>
            </div>
          </div>

          {/* Right side - Diamond/Triangle Shape */}
          <div className="flex justify-center items-center">
            <div className="border-2 border-black w-32 h-32 transform rotate-45 flex items-center justify-center bg-white shadow-sm">
              <div className="transform -rotate-45">
                <div className="w-16 h-16 border-2 border-black transform rotate-45 bg-white"></div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
