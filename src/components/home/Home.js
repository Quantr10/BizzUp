import {auth, db} from "../Firebase";
import {doc, getDoc} from "firebase/firestore";

import { useUser } from '../contexts/UserContext';

function Home() {
  const { userDetails, loading } = useUser();

  if (loading) return <p>Loading...</p>;

  return (
    <div>
      <h3>Welcome {userDetails?.name}</h3>
      <p>Email: {userDetails?.email}</p>
      <button onClick={() => auth.signOut()}>Logout</button>
    </div>
  );
}

export default Home;
