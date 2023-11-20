// "use client";

import Feed from '@components/Feed';

async function getEvents() {
  const res = await fetch('https://next-szevents.vercel.app/api/szevent', {
    next: {
      revalidate: 0,
    }
  });

  return await res.json();
}

const Home = async () => {

  const events = await getEvents();
  console.log(events);

  return (
    <section className="w-full flex-center flex-col">
      <h1 className="text-2xl font-bold md:mt-4 mt-6 mb-4">Itt láthatod az összes elérhető rendezvényt!</h1>

      <Feed events={events} />
    </section>
  );
};

export default Home;
