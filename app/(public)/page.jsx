import Feed from '@components/Feed';

async function getEvents() {
  const data = await fetch('https://next-szevents.vercel.app/api/szevent');

  if (!data.ok) {
    throw new Error('Network response was not ok');
  }

  return data.json();
}

const Home = async () => {
  const events = await getEvents();

  console.log('events', events);

  return (
    <section className="w-full flex-center flex-col">
      <h1 className="text-2xl font-bold md:mt-4 mt-6 mb-4">Itt láthatod az összes elérhető rendezvényt!</h1>

      {events ? (
        <Feed events={events} />
      ) : (
        <p className="text-lg">Nincs megjeleníthető esemény.</p>
      )}
    </section>
  );
};

export default Home;
