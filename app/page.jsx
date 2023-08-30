import Topic from "@components/Topic";
import CountDown from "@components/CountDown";
import News from "@components/News";
import Timetable from "@components/Timetable";
import Sign_in from "@components/Sign-in";
import Activity from "@components/Activity";
import Team_intro from "@components/Team_intro";
import Award from "@components/Award";
import Sponsor from "@components/Sponsor";
import Page_title from "@components/Page_title";

const Home = () => {
  return (
    <>
      <Page_title/>
      <CountDown />
      <Activity />
      <Timetable />
      <Team_intro />
      <Sign_in />
      <Award />
      <Topic />
      <Sponsor />
      <News />
    </>
  );
};
export default Home;
