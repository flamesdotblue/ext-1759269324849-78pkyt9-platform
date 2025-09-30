function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200/60 bg-white/70 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <a href="#" className="inline-flex items-center gap-2 font-semibold tracking-tight text-gray-900">
          <span className="h-2 w-2 rounded-sm bg-red-500" aria-hidden="true" />
          HelloWorld
        </a>
        <nav className="flex items-center gap-6 text-sm">
          <a href="#features" className="text-gray-600 transition hover:text-gray-900">Features</a>
          <a href="#start" className="rounded-md bg-gray-900 px-3 py-2 text-white shadow-sm transition hover:bg-gray-800">Get Started</a>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
