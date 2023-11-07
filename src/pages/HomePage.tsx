import { Stack } from "@mui/material";
import store from "../store";
import { genreSliceEndpoints, useGetGenresQuery } from "../store/slices/genre";
import { MEDIA_TYPE } from "../types/Common";
import HeroSection from "../components/HeroSection";
import { CustomGenre, Genre } from "../types/Genre";
import { COMMON_TITLES } from "../constant";
import SliderRowForGenre from "../components/VideoSlider";

export async function loader() {
  await store.dispatch(
    genreSliceEndpoints.getGenres.initiate(MEDIA_TYPE.Movie)
  );
  return null;
}

export function Component() {
  const { data: genres, isSuccess } = useGetGenresQuery(MEDIA_TYPE.Movie);
  if (isSuccess && genres && genres.length > 0) {
    return (
      <Stack spacing={2}>
        <HeroSection mediaType={MEDIA_TYPE.Movie} />
        {[...COMMON_TITLES, ...genres].map((genre: Genre | CustomGenre) => (
          <SliderRowForGenre
            key={genre.id || genre.name}
            genre={genre}
            mediaType={MEDIA_TYPE.Movie}
          />
        ))}
      </Stack>
    );
  }
}
