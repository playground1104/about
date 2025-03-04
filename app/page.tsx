import Hello from "@/components/animated/Hello";
import Interests from "@/components/animated/Interests";
import database from "@/utils/database";

const Home = async () => {
  const interestData = await database("interest").select("*");
  const projectData = await database("project").select("*");
  // TODO: render
  console.log(projectData);
  return (
    <div>
      <Hello />
      <Interests interestData={interestData} />
    </div>
  );
};

export default Home;
