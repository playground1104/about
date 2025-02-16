import { Hello } from "@/components/animated/Hello";
import database from "@/utils/database";

const Home = async () => {
  const data = await database("project").select("*");
  // TODO: render
  console.log(data);
  return (
    <div>
      <Hello />
    </div>
  );
};

export default Home;
