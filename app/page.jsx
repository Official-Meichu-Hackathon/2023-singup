import Topic from "@components/Topic";
import CountDown from '@components/CountDown';
import News from "@components/News";
import Timetable from "@components/Timetable";
import Sign_in from "@components/Sign-in"
import Activity from "@components/Activity";
import Team_intro from "@components/Team_intro";
import Award from "@components/Award";
const Home = () => {
  return (
    <>
      <CountDown />
      <Activity />
      <Team_intro />
      <Timetable />
      <Sign_in />
      <Award />
      <Topic />
      <News />
    </>
  );
};
export default Home;
