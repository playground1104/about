interface QuickLink {
  url: string;
  name: string;
  icon?: string;
  private?: boolean;
}

// TODO: import quick link data from external database + edit via web panel
const quickLinks: { [key: string]: QuickLink } = {
  music: {
    url: "https://music.youtube.com/playlist?list=PLq8CI_1_Iux8UFubcc9QVmN1hhQo3xEpW",
    name: "YT Music Playlist",
    icon: "ytmusic",
  },
  solved: {
    url: "https://solved.ac/profile/sions0411",
    name: "solved.ac Profile",
  },
  gdev: {
    url: "https://g.dev/eunwoo1104",
    name: "Google Developer Program",
  },
};

export default quickLinks;
