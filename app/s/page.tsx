import ExternalLink from "@/components/ExternalLink";
import icons from "@/utils/icons";
import quickLinks from "@/utils/links";

const Home = async () => {
  return (
    <div className="py-24">
      <h1 className="text-3xl font-bold">Quick Links</h1>
      <div className="flex flex-col items-baseline">
        {Object.entries(quickLinks).map(([uid, qlink]) => {
          if (qlink.private) return;
          return (
            <ExternalLink
              key={uid}
              url={qlink.url}
              icon={
                (qlink.icon ? icons[qlink.icon] : null) || icons.externalLink
              }
            >
              {qlink.name} <span className="opacity-50">[ /s/{uid} ]</span>
            </ExternalLink>
          );
        })}
      </div>
    </div>
  );
};

export default Home;
