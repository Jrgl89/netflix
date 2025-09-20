import Image from "next/image";
import Link from "next/link";
import Header from "./components/header";
import { getAllMovies } from "@/services/movieService";

interface MovieType {
  id: number;
  title: string;
  backdrop_path: string;
  poster_path: string;
  overview: string;
}
export default async function Home() {
  const movies = await getAllMovies();
  const featuredMovies = movies.results[0];
  const IMAGE_BASE_URL = process.env.IMAGE_PATH;
  console.log(movies);
  return (
    <div className="bg-black text-white min-h-screen">
      <Header />

      <div className="h-7"></div>
      {featuredMovies && (
        <div
          className="relative w-full h-[500px] bg-cover bg-center mt-16 "
          style={{
            backgroundImage: `url(${IMAGE_BASE_URL}${featuredMovies.backdrop_path})`,
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-top from black to to-transparent p-8 flex flex-col justify-end">
            <h1 className="text-4xl font-bold mb-4">
              {featuredMovies.title}
            </h1>
            <p className="text-md max-w-xl">{featuredMovies.overview}</p>
            <div className="mt-4">
              <Link href={`/movie/${featuredMovies.id}`}>
                <button className="bg-red-600 text-white px-4 py-1 rounded-lg text-md  font-semibold hover:bg-red-700">
                  Тоглуул
                </button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
