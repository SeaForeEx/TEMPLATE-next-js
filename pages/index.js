// import { Button } from 'react-bootstrap'; // TODO: COMMENT IN FOR AUTH
// import { signOut } from '../utils/auth'; // TODO: COMMENT IN FOR AUTH
import Counter from '../components/Counter';
import { useAuth } from '../utils/context/authContext'; // TODO: COMMENT IN FOR AUTH

function Home() {
  const { user } = useAuth(); // TODO: COMMENT IN FOR AUTH

  const counters = [{ title: 'Counter 1' }, { title: 'Counter 2' }, { title: 'Counter 3' }, { title: 'Counter 4' }, { title: 'Counter 5' }];

  return (
    <>
      <div>
        <h1>Hello {user.displayName}! </h1>
        {counters.map((counter) => (
          <Counter key={counter.title} title={counter.title} />
        ))}
      </div>
    </>
  );
}

export default Home;
