import { HStack, Image, Text } from "@chakra-ui/react";
import logo from "../assets/Ag1_09.jpg";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";


interface Props {
  onSearch: (searchText: string) => void;
}

function NavBar({onSearch}:Props) {
  return (
    <HStack justifyContent={"space-between"} padding="10px">
      <Image src={logo} boxSize="60px" borderRadius={50}></Image>
      <Text whiteSpace={"nowrap"}>BsBs Games</Text>
      <SearchInput onSearch={onSearch}></SearchInput>
      <ColorModeSwitch></ColorModeSwitch>
    </HStack>
  );
}

export default NavBar;
