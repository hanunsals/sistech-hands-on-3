import Sidebar from '../components/Sidebar';
import Header from '../components/Header';

export default function Home() {
  return (
    <div className="flex">
      <Sidebar />
      <main className="flex-1 bg-gray-100 p-8">
        <Header />
        <section className="bg-blue-600 text-white p-4 rounded-lg mb-6">
          <h2 className="text-xl">Welcome to the Dashboard</h2>
        </section>
        <section className="bg-white p-4 rounded-lg shadow-md">
          <h3 className="text-gray-700 text-lg">Dashboard Content</h3>
          <p className="text-gray-600">This is the dashboard content area.</p>
        </section>
      </main>
    </div>
  );
}
