import { Rocket, Star, Settings } from 'lucide-react';

const features = [
  {
    title: 'Instant start',
    desc: 'Vite + React + Tailwind preconfigured so you can ship fast with sensible defaults.',
    Icon: Rocket,
  },
  {
    title: 'Beautiful by default',
    desc: 'Typography, spacing, and motion that feel modern without getting in your way.',
    Icon: Star,
  },
  {
    title: 'Configurable',
    desc: 'Extend with shadcn/ui, Radix, and Framer Motion already available in the stack.',
    Icon: Settings,
  },
];

function Features() {
  return (
    <section id="features" className="relative border-t border-gray-200 bg-white py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Everything you need to say hello</h2>
          <p className="mt-3 text-base text-gray-700">
            Start from a friendly baseline and grow into something remarkable.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map(({ title, desc, Icon }) => (
            <div key={title} className="group rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition hover:shadow-md">
              <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-gray-900 text-white shadow-sm">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
              <p className="mt-2 text-sm leading-6 text-gray-700">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Features;
