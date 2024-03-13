"use client";
import { useState } from 'react';
import Image from 'next/image';
import { getAnimalData } from './FetchAnimal/page';

export default function Home() {
  const [animalData, setAnimalData] = useState(null);
  const [animalName, setAnimalName] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = await getAnimalData(animalName);
      setAnimalData(data);
    } catch (error) {
      console.error('Error:', error.message);
    }
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <form onSubmit={handleSubmit} className="mb-8">
        <input
          type="text"
          value={animalName}
          onChange={(e) => setAnimalName(e.target.value)}
          placeholder="Enter animal name"
          className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          type="submit"
          className="ml-4 px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Submit
        </button>
      </form>

      {animalData ? (
        <div className="bg-white shadow-md rounded-md p-6">
          <h1 className="text-2xl font-bold mb-4">{animalData.animal}</h1>
          <Image src={animalData.image} alt={animalData.animal} width={400} height={300} />
          <p className="text-gray-700">{animalData.fact}</p>
        </div>
      ) : (
        <p className="text-gray-500">Enter an animal name and click submit to fetch data.</p>
      )}
    </main>
  );
}