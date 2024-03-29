"use client"
import EventsPage from '@components/EventsPage';
import Loading from './loading';
import { Suspense } from 'react';


const Home = async () => {
  return (
    <section className="w-full flex-center flex-col min-h-[1000px]">
      <h1 className="text-2xl font-bold md:mt-4 mt-6 mb-4">Itt láthatod az összes elérhető rendezvényt!</h1>
      <Suspense fallback={<Loading />}>
        <EventsPage />
      </Suspense>

    </section>
  );
};

export default Home;
