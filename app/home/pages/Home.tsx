import SectionHeader from "../components/SectionHeader/SectionHeader";
import { HomeContainer } from "../styles/Home.styles";

type HomeProps = {};
const Home = ({}: HomeProps) => {
  return (
    <HomeContainer>
      <SectionHeader />
    </HomeContainer>
  );
};

export default Home;
