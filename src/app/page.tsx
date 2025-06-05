export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center text-center px-6 bg-bg text-white font-sans">
      <h1 className="text-5xl md:text-7xl font-heading text-green mb-4 border-b-4 border-orange inline-block">
        NEVER HALFWAY
      </h1>

      <div className="w-24 h-1 bg-orange mb-8 mx-auto rounded"></div>

      <p className="text-lg md:text-xl text-muted max-w-lg">
        Bill Zade — Builder. Veteran. Musician. Coder.
      </p>

      {/* Test line */}
      <p className="text-green mt-6">This should be terminal green text</p>
    </main>
  );
}
