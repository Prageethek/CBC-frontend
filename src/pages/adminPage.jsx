import { Link, Routes, Route } from "react-router-dom";

export default function AdminPage() {
  return (
    <div className="h-screen w-full flex ">
      <div className="h-full w-[300px] bg-amber-200 flex flex-col">
        <Link to="/admin/products">products</Link>
        <Link to="/admin/users">users</Link>
        <Link to="/admin/orders">orders</Link>
        <Link to="/admin/reviews">reviews</Link>
      </div>
      <div className="h-full w-[calc(100%-300px)] bg-blue-500">
        <Routes path="/">
          <Route path="/products" element={<h1>products</h1>} />
          <Route path="/users" element={<h1>users</h1>} />
          <Route path="/orders" element={<h1>orders</h1>} />
          <Route path="/reviews" element={<h1>reviews</h1>} />
        </Routes>
      </div>
    </div>
  );
}
