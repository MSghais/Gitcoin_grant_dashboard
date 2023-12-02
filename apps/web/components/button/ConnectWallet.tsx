import {
  Box,
  Text,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
  Button,
  Icon,
} from "@chakra-ui/react";
import { UsersIcon } from "@heroicons/react/solid";
import Link from "next/link";
import { BiChevronDown } from "react-icons/bi";
import { useAccount } from "wagmi";

export const ConnectWallet = () => {
  // const session = useSession()
  const account = useAccount();

  if (!account.address) {
    return;
  }

  return (
    <Box pr="1em" pl="1em">
      <Button onClick={() => {}}></Button>
      <Menu>
        {({ isOpen }) => (
          <>
            <MenuButton
              isActive={isOpen}
              as={Button}
              // rightIcon={<BiChevronDown />}
            >
              {isOpen ? "My profil" : "Account"}
              {/* <Icon as={BiChevronDown}></Icon> */}
              <Icon
                as={UsersIcon}
                width={"16px"}
                h="16px"
                //  pl='1em'
              ></Icon>
            </MenuButton>
            <MenuList>
              <MenuItem>
                <Button>
                  <Link href="/my-profil">My profil</Link>
                </Button>
              </MenuItem>
              <Text> {account.address}</Text>

              {/* <MenuItem onClick={() => alert('Kagebunshin')}>Create a Copy</MenuItem> */}
            </MenuList>
          </>
        )}
      </Menu>
    </Box>
  );
};
