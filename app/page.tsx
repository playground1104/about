import Hello from "@/components/animated/Hello";
import Links from "@/components/animated/Links";
import ExternalLink from "@/components/ExternalLink";
import icons from "@/utils/icons";

const Home = async () => {
  return (
    <div className="h-screen flex flex-col items-center justify-center">
      <Hello />
      <div className="h-10" />
      <Links />
      <div className="absolute bottom-5 opacity-50">
        <ExternalLink
          url="https://github.com/playground1104/about"
          icon={icons.github}
        >
          Source
        </ExternalLink>
      </div>
    </div>
  );
};

export default Home;
