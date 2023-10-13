import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import usePlatforms, { Platform } from "../hooks/usePlatforms";

interface Props {
  onSelectPlatform: (platform: Platform) => void;
  selectedPlatform: Platform | null;
}
export default function PlatformSelector({
  onSelectPlatform,
  selectedPlatform,
}: Props) {
  const { data, error, loading } = usePlatforms();

  return (
    <>
      {error && <p>{error}</p>}
      <Menu>
        <MenuButton as={Button} rightIcon={<BsChevronDown></BsChevronDown>}>
          {selectedPlatform?.name || "Platforms"}
        </MenuButton>

        <MenuList>
          {data.map((platform) => (
            <MenuItem key={platform.id}>
              <Button
                variant={"link"}
                onClick={() => onSelectPlatform(platform)}
              >
                {platform.name}
              </Button>
            </MenuItem>
          ))}
        </MenuList>
      </Menu>
    </>
  );
}
