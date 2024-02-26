import author from "./author";
import blockContent from "./blockContent";
import post from "./post";
import postPlaylist from "./post-playlist.schema";
import animeRecomandation from "./anime";
import keepReadingPlaylist from "./keep-reading.schema";
import featuredAnimePlaylist from "./featured-anime.schema";

const schemas = [
  post,
  author,
  blockContent,
  postPlaylist,
  animeRecomandation,
  keepReadingPlaylist,
  featuredAnimePlaylist,
];

export default schemas;
