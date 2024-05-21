import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import base_url from "../../config";
import LinkLayout from "../components/LinkLayout";
import MovieLinks from "../components/MovieLinks";
import TvShowsLinks from "../components/TvShowsLinks";


const Links = () => {
  const [movieDetails, setMovieDetails] = useState([]);
  const download = [
    {
      id: 1,
      size: "339.31 MB 480P:",
    },
    {
      id: 2,
      size: "700.5 MB 720P HEVC:",
    },
    {
      id: 3,
      size: "1.10 GB 720P:",
    },
    {
      id: 4,
      size: "1.5 GB 1080P HEVC:",
    },
    {
      id: 5,
      size: "2.5 GB 1080P:",
    },
  ];

  const { id } = useParams();

  useEffect(() => {
    axios.get(`${base_url}/blog/post/21`).then((res) => {
      if (res?.data?.status) {
        setMovieDetails(res?.data?.data);
      }
    });
  }, []);

  console.log(movieDetails);

  return (
    <LinkLayout>
      <div>
        {movieDetails?.blog_type == "movies" ? (
          <MovieLinks data={movieDetails} />
        ) : movieDetails?.blog_type=="tvshows" ? (
          <TvShowsLinks data={movieDetails}/>
        ):""}
      </div>
    </LinkLayout>
  );
};

export default Links;
