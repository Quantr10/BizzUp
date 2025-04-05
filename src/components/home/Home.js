import {auth, db} from "../Firebase";
import {doc, getDoc} from "firebase/firestore";
import SliderImg from '../sliderImg/SliderImg'; // adjust the path if needed
import { useUser } from '../contexts/UserContext';
import LocalBusinessSlider from "./LocalBusinessSlider";

function Home() {
  const { userDetails, loading } = useUser();

  if (loading) return <p>Loading...</p>;

  return (
    <div>
        <SliderImg />
        <LocalBusinessSlider />
    </div>
  );
}

export default Home;
