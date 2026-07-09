export default function Signup() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-green-100">
      <div className="bg-white p-8 rounded-xl shadow-lg w-80">
        <h2 className="text-2xl font-bold text-center mb-6">Sign Up</h2>

        <input
          type="text"
          placeholder="Name"
          className="w-full border p-2 rounded mb-4"
        />

        <input
          type="email"
          placeholder="Email"
          className="w-full border p-2 rounded mb-4"
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full border p-2 rounded mb-4"
        />

        <button className="w-full bg-green-500 text-white p-2 rounded hover:bg-green-600">
          Create Account
        </button>
      </div>
    </div>
  );
}
