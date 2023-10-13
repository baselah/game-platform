import { HStack, Image, Text } from "@chakra-ui/react";
import logo from "../assets/Ag1_09.jpg";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";
function NavBar() {
  return (
    <HStack justifyContent={"space-between"} padding="10px">
      <Image src={logo} boxSize="60px"></Image>
      <Text whiteSpace={"nowrap"}>BsBs Games</Text>
      <SearchInput></SearchInput>
      <ColorModeSwitch></ColorModeSwitch>
    </HStack>
  );
}

export default NavBar;