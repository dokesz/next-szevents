import Feed from '@components/Feed';

async function getEvents() {
  const data = await fetch('https://next-szevents.vercel.app/api/szevent', {
    next: {
      revalidate: 0,
    }
  });

  if (!data.ok) {
    throw new Error('Network response was not ok');
  }

  return data.json();
}

const Home = async () => {
  const events = await getEvents();
  return (
    <section>
      {events ? (
        <Feed events={events} />
      ) : (
        <p className="text-lg">Nincs megjeleníthető esemény.</p>
      )}
    </section>
  );
};

export default Home;
