import Hello from "@/components/animated/Hello";
import Interests from "@/components/animated/Interests";
import database from "@/utils/database";
import Projects from "@/components/animated/Projects";

const Home = async () => {
  const interestData = await database("interest").select("*");
  const projectData = await database("project").select("*");
  const links = await database("link").select("*");
  projectData.map((project) => {
    project.stack = project.stack?.split(",");
    project.links = project.links
      .split(",")
      .map((link: string) => links[Number(link) - 1]);
    return project;
  });
  return (
    <div>
      <Hello />
      <Interests interestData={interestData} />
      <Projects projectData={projectData} />
    </div>
  );
};

export default Home;
