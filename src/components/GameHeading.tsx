import { Heading } from "@chakra-ui/react";
import useGenre from "../hooks/useGenre";
import usePlatfrom from "../hooks/usePlatform";
import useGameQueryStore from "../store";

const GameHeading = () => {
  const genreId = useGameQueryStore((s) => s.gameQuery.genreId);
  const platformId = useGameQueryStore((s) => s.gameQuery.platformId);

  const genre = useGenre(genreId);
  const platform = usePlatfrom(platformId);

  const heading = `${platform?.name || ""} ${genre?.name || ""} Game`;

  return (
    <Heading as="h1" marginY={5} fontSize="5xl">
      {heading}
    </Heading>
  );
};

export default GameHeading;
