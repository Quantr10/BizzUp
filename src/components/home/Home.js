import {auth, db} from "../Firebase";
import {doc, getDoc} from "firebase/firestore";
import SliderImg from '../sliderImg/SliderImg'; // adjust the path if needed
import { useUser } from '../contexts/UserContext';

function Home() {
  const { userDetails, loading } = useUser();

  if (loading) return <p>Loading...</p>;

  return (
    <div>
        <SliderImg />
      <h3>Welcome {userDetails?.name}</h3>
      <p>Email: {userDetails?.email}</p>
      <button onClick={() => auth.signOut()}>Logout</button>
    </div>
  );
}

export default Home;
