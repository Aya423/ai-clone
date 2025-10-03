import { Button } from "@/components/ui/button"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen w-full overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img src="/aerial-view-of-amazon-river-winding-through-rainfo.jpg" alt="Amazon River aerial view" className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60" />
        </div>

        {/* Navigation */}
        <nav className="relative z-10 flex items-center justify-between p-6 md:p-8">
          <Button variant="secondary" size="lg" className="rounded-full bg-white/90 text-primary hover:bg-white">
            Breathing Rivers
          </Button>
          <Button variant="secondary" size="lg" className="rounded-full bg-white/90 text-primary hover:bg-white">
            Explore More
          </Button>
        </nav>

        {/* Hero Content */}
        <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center">
          <h1 className="mb-4 font-sans text-6xl font-bold text-white md:text-8xl lg:text-9xl">Amazon River</h1>
          <p className="mb-8 text-2xl font-light text-white md:text-3xl lg:text-4xl">The Largest River in the World</p>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2">
          <div className="h-12 w-6 rounded-full border-2 border-white/50">
            <div className="mx-auto mt-2 h-2 w-2 animate-bounce rounded-full bg-white/70" />
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="mx-auto max-w-6xl px-6 py-20 md:py-32">
        <div className="space-y-8">
          <p className="text-balance text-xl leading-relaxed text-foreground md:text-2xl lg:text-3xl">
            Over 6,400 km long, carries more water than any other river on Earth and drains the largest rainforest in
            the world. It provides about 20% of the planet's freshwater outflow and supports unmatched biodiversity.
          </p>
          <p className="text-balance text-xl leading-relaxed text-foreground md:text-2xl lg:text-3xl">
            More than 30 million people, including many Indigenous communities, depend on it for food, transport, and
            culture.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-primary py-20 text-primary-foreground md:py-32">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-12 md:grid-cols-3">
            <div className="space-y-4">
              <div className="text-6xl font-bold md:text-7xl">6,400</div>
              <div className="text-xl md:text-2xl">Kilometers Long</div>
            </div>
            <div className="space-y-4">
              <div className="text-6xl font-bold md:text-7xl">20%</div>
              <div className="text-xl md:text-2xl">Of Earth's Freshwater Outflow</div>
            </div>
            <div className="space-y-4">
              <div className="text-6xl font-bold md:text-7xl">30M+</div>
              <div className="text-xl md:text-2xl">People Depend On It</div>
            </div>
          </div>
        </div>
      </section>

      {/* Image Grid Section */}
      <section className="mx-auto max-w-7xl px-6 py-20 md:py-32">
        <h2 className="mb-12 text-center text-4xl font-bold text-foreground md:text-5xl lg:text-6xl">
          Biodiversity & Life
        </h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <div className="group relative aspect-square overflow-hidden rounded-lg">
            <img
              src="/amazon-rainforest-canopy-wildlife.jpg"
              alt="Amazon rainforest canopy"
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            <div className="absolute bottom-6 left-6 text-white">
              <h3 className="text-2xl font-bold">Rainforest Canopy</h3>
            </div>
          </div>
          <div className="group relative aspect-square overflow-hidden rounded-lg">
            <img
              src="/amazon-river-dolphins-pink.jpg"
              alt="Amazon river dolphins"
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            <div className="absolute bottom-6 left-6 text-white">
              <h3 className="text-2xl font-bold">River Dolphins</h3>
            </div>
          </div>
          <div className="group relative aspect-square overflow-hidden rounded-lg">
            <img
              src="/indigenous-communities-amazon-river.jpg"
              alt="Indigenous communities"
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            <div className="absolute bottom-6 left-6 text-white">
              <h3 className="text-2xl font-bold">Indigenous Communities</h3>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-secondary py-20 text-secondary-foreground md:py-32">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h2 className="mb-6 text-4xl font-bold md:text-5xl lg:text-6xl">Protect Our Rivers</h2>
          <p className="mb-8 text-xl leading-relaxed md:text-2xl">
            Join the movement to preserve the Amazon River and its vital ecosystems for future generations.
          </p>
          <Button
            size="lg"
            className="rounded-full bg-accent px-8 py-6 text-lg font-semibold text-accent-foreground hover:bg-accent/90"
          >
            Learn How to Help
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-card py-12">
        <div className="mx-auto max-w-6xl px-6">
          <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
            <div className="text-center text-sm text-muted-foreground md:text-left">
              © 2025 Breathing Rivers. Dedicated to river conservation.
            </div>
            <div className="flex gap-6">
              <a href="#" className="text-sm text-muted-foreground hover:text-foreground">
                About
              </a>
              <a href="#" className="text-sm text-muted-foreground hover:text-foreground">
                Contact
              </a>
              <a href="#" className="text-sm text-muted-foreground hover:text-foreground">
                Privacy
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
