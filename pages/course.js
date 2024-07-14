import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import Card from '../components/Card';

export default function Course() {
  return (
    <div className="flex">
      <Sidebar />
      <main className="flex-1 bg-gray-100 p-8">
        <Header />
        <section className="bg-blue-600 text-white p-4 rounded-lg mb-6">
          <h2 className="text-xl">Learn With Effectively With Us!</h2>
        </section>
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <Card category="DESIGN" title="Learn Figma" duration="6h 30min" price="Rp. 1.000,000,-" imageUrl="/assets/figma.jpg" />
          <Card category="SOCIAL MEDIA" title="Master Instagram" duration="5h 15min" price="Free" imageUrl="/assets/ig.jpg" />
          <Card category="PHOTOGRAPHY" title="Analog Photography" duration="3h 40min" price="Free" imageUrl="/assets/analog.png" />
          <Card category="PHOTOGRAPHY" title="Photoshop - Essence" duration="6h 45min" price="Rp. 1.000,000,-" imageUrl="/assets/ps.jpg" />
        </section>
      </main>
    </div>
  );
}
