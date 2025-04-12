import Hello from "@/components/animated/Hello";
import Links from "@/components/animated/Links";

const Home = async () => {
  return (
    <div className="h-screen flex flex-col items-center justify-center">
      <Hello />
      <div className="h-10" />
      <Links />
    </div>
  );
};

export default Home;
