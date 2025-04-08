import SliderImg from '../sliderImg/SliderImg';
import { useUser } from '../contexts/UserContext';
import LocalsSlider from "./LocalsSlider";
import DealsSlider from "./DealsSlider";

function Home() {
  const { userDetails, loading } = useUser();

  if (loading) return <p>Loading...</p>;

  return (
    <div>
      <SliderImg />
      <DealsSlider/>
      <LocalsSlider />
    </div>
  );
}

export default Home;
