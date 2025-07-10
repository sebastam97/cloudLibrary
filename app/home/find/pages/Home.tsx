"use client";

import CategoryPremiun from "../components/CategoryPremium/CategoryPremiun";
import MoreCategories from "../components/MoreCategories/MoreCategories";
import MostPopular from "../components/MostPopular/MostPopular";
import SectionHeader from "../components/SectionHeader/SectionHeader";
import { HomeContainer } from "../styles/Home.styles";

const Home = () => {
  return (
    <HomeContainer>
      <SectionHeader />
      <CategoryPremiun />
      <MoreCategories />
      <MostPopular />
    </HomeContainer>
  );
};

export default Home;
