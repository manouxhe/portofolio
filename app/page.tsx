export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center text-center min-h-screen">
      <h1 className="text-6xl  text-[oklch(81%_0.117_11.638)] mb-4">
        Hello, my name is Manar Elkadi
      </h1>

      <p className="text-xl text-gray-600 mb-6">
        Electronic & Computer Engineering Student
      </p>

      <p className="max-w-xl text-gray-500 mb-10">
        I’m passionate about technology, design, and innovation. I love building
        projects that blend creativity with logic.
      </p>

      <button
        className="
        bg-white
        text-pink-400
        px-6
        py-3
        rounded-full
        shadow-md
        transition
        hover:scale-105
        hover:shadow-lg
      "
      >
        Discover my world
      </button>
    </main>
  );
}
