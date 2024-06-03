import React from "react";
import { MainContentBase, TintsGeneratorForm } from "../../components";

interface HomeProps {

}

const Home: React.FC<HomeProps> = () => {
  return (
    <div>
      <MainContentBase>
        <TintsGeneratorForm></TintsGeneratorForm>
      </MainContentBase>
    </div>
  );
};

export default Home;
