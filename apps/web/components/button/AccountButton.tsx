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
import { useAccount } from "wagmi";
import { CustomConnectButtonWallet } from "./CustomConnectButtonWallet";

export const AccountButton = () => {
  const account = useAccount();
  const address = account.address;
  return (
    <Menu
    >
      {({ isOpen }) => (
        <>
          <MenuButton
            // isActive={isOpen}
            // as={Box}
            as={Button}
            width={{ base: "100%" }}
          >
            <span>
              {isOpen ? "My profil" : "My account"}
              <Icon
                as={UsersIcon}
                width={"16px"}
                h="16px"
                //  pl='1em'
              ></Icon>
            </span>
          </MenuButton>
          <MenuList>
            {/* <Box> <ConnectButton></ConnectButton></Box> */}
            <MenuItem>
              <Text> {account?.address}</Text>{" "}
            </MenuItem>
            {/* <MenuItem as ="div"><ConnectButton></ConnectButton> </MenuItem> */}
            {/* <MenuItem as ="div"><CustomConnectButton></CustomConnectButton> </MenuItem> */}
            {/* <MenuItem as ="div"><CustomConnectButtonWallet></CustomConnectButtonWallet> </MenuItem> */}
          </MenuList>
        </>
      )}
    </Menu>
  );
};
