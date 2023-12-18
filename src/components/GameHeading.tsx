import { Heading } from "@chakra-ui/react";
import { GameQuery } from "../App";
import usePlatfrom from "../hooks/usePlatform";
import useGenre from "../hooks/useGenre";

interface Props {
  gameQuery: GameQuery;
}
const GameHeading = ({ gameQuery }: Props) => {
  const genre = useGenre(gameQuery.genreId);
  const platform = usePlatfrom(gameQuery.platformId);

  const heading = `${platform?.name || ""} ${genre?.name || ""} Game`;

  return (
    <Heading as="h1" marginY={5} fontSize="5xl">
      {heading}
    </Heading>
  );
};

export default GameHeading;
