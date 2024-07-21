export default function Header() {
  return (
    <header className="bg-blue-600 p-4 flex justify-between items-center text-white">
      <h2>Hi, Hanun!</h2>
      <div className="flex items-center space-x-4">
        <div className="relative">
          <input
            type="text"
            placeholder="Search Course..."
            className="p-2 rounded-md bg-blue-700 text-white placeholder-gray-300"
          />
          <i className="fa-solid fa-search absolute top-1/2 right-2 transform -translate-y-1/2 text-blue-900"></i>
        </div>
        <button className="p-2 rounded-full bg-blue-700 hover:bg-blue-800">
          <i className="fas fa-bell"></i>
        </button>
        <button className="p-2 rounded-full bg-blue-700 hover:bg-blue-800">
          <i className="fas fa-user"></i>
        </button>
      </div>
    </header>
  );
}
