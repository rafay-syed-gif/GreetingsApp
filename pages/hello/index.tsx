import { useState } from 'react';
import { useRouter } from 'next/router';

const Home: React.FC = () => {
  const router = useRouter();
  const [name, setName] = useState<string>('');
  const [greeting, setGreeting] = useState<string>('Hello');

  const handleSubmit = () => {
    // Update the greeting with the provided name
    setGreeting(`Hello ${name}`);
  };

  return (
    <div className="bg-black min-h-screen">
      {/* Sticky Navbar */}
      <nav className="sticky top-0 z-50 bg-white p-4 text-2xl font-bold text-red-500">
        Greetings App
      </nav>

      {/* Main Content */}
      <div className="flex flex-col items-center justify-center pt-16">
        <h1 className="text-4xl font-bold text-red-500">{greeting}</h1>
        <div className="mt-4">
          <input
            type="text"
            className="border p-2"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <button
            className="ml-2 bg-blue-500 text-white p-2 rounded"
            onClick={handleSubmit}
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
