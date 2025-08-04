import Link from "next/link"

export default function Navigation() {
  return (
    <header className="border-b-2 border-black p-4">
      <div className="max-w-4xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="text-lg font-bold hover:underline hover:text-blue-600 transition-all duration-300">
          TANITI
        </Link>

        {/* Navigation Links */}
        <nav className="flex gap-6">
          <Link href="/page1" className="underline hover:no-underline hover:text-blue-600 transition-all duration-300">
            TOURIST NEEDS
          </Link>
          <Link href="/page2" className="underline hover:no-underline hover:text-blue-600 transition-all duration-300">
            ACTIVITIES
          </Link>
          <Link href="/page3" className="underline hover:no-underline hover:text-blue-600 transition-all duration-300">
            TRAVEL INFO
          </Link>
        </nav>
      </div>
    </header>
  )
}
