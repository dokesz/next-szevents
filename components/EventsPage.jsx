import Feed from '@components/Feed';

async function getEvents() {
  let url = '';
  if (process.env.NODE_ENV === 'development') {
    url = `${process.env.NEXT_PUBLIC_LOCALHOST_URL}/api/szevent`;
  } else {
    url = `${process.env.NEXT_PUBLIC_PRODUCTION_URL}/api/szevent`;
  }
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json();
}

const HomePage = async () => {
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

export default HomePage;
