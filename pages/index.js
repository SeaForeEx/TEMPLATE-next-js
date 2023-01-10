// import { Button } from 'react-bootstrap'; // TODO: COMMENT IN FOR AUTH
// import { signOut } from '../utils/auth'; // TODO: COMMENT IN FOR AUTH
import Counter from '../components/Counter';
import { useAuth } from '../utils/context/authContext'; // TODO: COMMENT IN FOR AUTH

function Home() {
  const { user } = useAuth(); // grabbing the hook
  // { user } spacing inside { } just for eslint
  const counters = [{ title: 'Counter 1' }, { title: 'Counter 2' }, { title: 'Counter 3' }, { title: 'Counter 4' }, { title: 'Counter 5' }];
  // array of objects, similar to get data from firebase, just pure data

  return ( // returning component for everything in this array
    <>
      <div>
        <h1>Hello {user.displayName}! </h1>
        {counters.map((counter) => (
          <Counter key={counter.title} title={counter.title} />
        ))}
      </div>
    </>
  ); // key is unique ID, kind of like firebaseKey for other projects
} // lets us repeat code for each counter instead of coding for each unique counter

// props are arguments attributes passed into function

export default Home;
