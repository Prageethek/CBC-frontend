export default function Home() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-10 rounded-xl shadow-lg text-center">
        <h1 className="text-4xl font-bold text-blue-600">Home Page</h1>

        <p className="mt-4 text-gray-600">Welcome to our website.</p>

        <button className="mt-6 bg-blue-500 text-white px-5 py-2 rounded hover:bg-blue-600">
          Get Started
        </button>
      </div>
    </div>
  );
}
