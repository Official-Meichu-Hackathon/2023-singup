import Topic from "@components/Topic";


import Award from "@components/Award";
import Team_intro from "@components/Team_intro";
import Sign_in from "@components/Sign-in"

const Home = () => {
  return (
    <>
      <Team_intro />
      <Sign_in/>
      <Award />
      <Topic />
    </>
  );
};
export default Home;