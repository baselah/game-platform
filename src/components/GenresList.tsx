import {
  Button,
  HStack,
  Image,
  List,
  ListItem,
  Spinner,
} from "@chakra-ui/react";
import useGenres, { Genre } from "../hooks/useGenres";

interface Props {
  onSelectGenre: (genre: Genre) => void;
  selectdGenre: Genre | null;
}

function GenresList({ onSelectGenre, selectdGenre }: Props) {
  const { data, error, loading } = useGenres();
  return (
    <>
      {loading && <Spinner padding={5}></Spinner>}
      <List>
        {data.map((genre) => (
          <ListItem key={genre.id} paddingY={"5px"}>
            <HStack paddingX={5}>
              <Image
                src={genre.image_background}
                boxSize={"32px"}
                borderRadius={8}
                fontSize={"lg"}
              ></Image>
              <Button
                fontWeight={selectdGenre?.id === genre.id ? "bold" : "normal"}
                variant={"link"}
                onClick={() => onSelectGenre(genre)}
              >
                {genre.name}
              </Button>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
}

export default GenresList;
