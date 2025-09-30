import Spline from '@splinetool/react-spline';

function Hero() {
  return (
    <section className="relative isolate" aria-label="Hero">
      <div className="relative h-[80vh] min-h-[560px] w-full overflow-hidden">
        <div className="absolute inset-0">
          <Spline
            scene="https://prod.spline.design/zhZFnwyOYLgqlLWk/scene.splinecode"
            style={{ width: '100%', height: '100%' }}
          />
        </div>

        {/* Overlays for readability that do not block interaction */}
        <div className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-white/80 to-transparent" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-white to-transparent" />

        <div className="relative z-10 mx-auto flex h-full max-w-7xl items-center px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="mb-3 inline-flex rounded-full bg-white/80 px-3 py-1 text-xs font-medium text-gray-700 shadow-sm ring-1 ring-gray-200 backdrop-blur">
              Minimal • Interactive • Modern
            </p>
            <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-6xl">
              Hello, world.
            </h1>
            <p className="mt-4 max-w-xl text-base leading-7 text-gray-700 sm:text-lg">
              A crisp starter that pairs a playful interactive background with a clean, corporate-friendly UI. Click or tap the grid to see it come alive.
            </p>
            <div className="mt-8 flex items-center gap-3">
              <a
                id="start"
                href="#features"
                className="rounded-md bg-gray-900 px-4 py-2.5 text-sm font-medium text-white shadow transition hover:bg-gray-800"
              >
                Explore features
              </a>
              <a
                href="#"
                className="rounded-md bg-white/80 px-4 py-2.5 text-sm font-medium text-gray-900 ring-1 ring-gray-200 backdrop-blur transition hover:bg-white"
              >
                View docs
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
