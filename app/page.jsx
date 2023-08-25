import Topic from "@components/Topic";
import CountDown from "@components/CountDown";
import Award from "@components/Award";
import Team_intro from "@components/Team_intro";
import Sign_in from "@components/Sign-in";
import Activity from "@components/Activity";
const Home = () => {
  return (
    <>
      <CountDown />
      <Activity />
      <Team_intro />
      <Sign_in />
      <Award />
      <Topic />
    </>
  );
};
export default Home;
