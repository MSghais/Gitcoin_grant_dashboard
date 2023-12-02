import React, { ReactNode, useEffect, useRef, useState } from "react";
import {
  Box,
  Flex,
  Icon,
  Link as LinkChakra,
  FlexProps,
  Button,
  ButtonProps,
  useColorModeValue,
} from "@chakra-ui/react";
import { FiHome, FiExternalLink } from "react-icons/fi";
import { IconType } from "react-icons";
import Link from "next/link";
import { FaUserFriends } from "react-icons/fa";
import { BsCurrencyBitcoin, BsCurrencyExchange } from "react-icons/bs";
import { MdDashboard } from "react-icons/md";
import { CONFIG_SOCIAL } from "../constants";
interface LinkItemProps {
  name: string;
  icon: IconType;
  href: string;
}

interface NavItemProps extends FlexProps {
  icon: IconType;
  children: ReactNode;
  href: string;
}

export const NavItem = ({ icon, children, href, ...rest }: NavItemProps) => {
  return (
    <Button as={Link} href={href} width={"100%"} gap={3} p={3}>
      <Box>
        <Flex align="center" borderRadius="lg" role="group">
          {icon && (
            <Icon
              mr="4"
              fontSize="16"
              _groupHover={{
                color: "white",
              }}
              as={icon}
            />
          )}
        </Flex>
      </Box>
    </Button>
  );
};

interface StylizedButtonLinkProps extends ButtonProps {
  icon?: IconType;
  href: string;
  title?: string;
  text?: string;
  children: React.ReactNode;
  isExternal?: boolean;
  onClick?: () => void;
}

export const StylizedButtonLink: React.FC<StylizedButtonLinkProps> = ({
  icon,
  title,
  text,
  href,
  children,
  isExternal,
  onClick,
  ...rest
}) => (
  <Button
    display="inline-flex"
    alignItems="center"
    justifyItems={"left"}
    justifyContent={"left"}
    textAlign={"left"}
    width={"100%"}
  >
    <Box
      as={Link}
      href={href}
      width={"100%"}
      textAlign={"left"}
      justifyItems={"left"}
      justifyContent={"left"}
      title={title ?? `ToolFiBot link ${isExternal && "external"}`}
    >
      <Box justifyContent={"left"} justifyItems={"left"} textAlign={"left"}>
        {icon && <Icon as={icon} marginRight={2} />}
        {children}
      </Box>
    </Box>
  </Button>
);

interface ILearnMoreButton extends ButtonProps {
  scrollToElement?: () => void;
  title?: string;
  rest?: ButtonProps;
  text?: string;
}

export const LearnMoreButton: React.FC<ILearnMoreButton> = (props) => {
  return (
    <Button
      mt={"0.5em"}
      w="100%"
      p="1em"
      title={props.title}
      // bg={useColorModeValue("gray.500", "gray.300")}
      // color={useColorModeValue("gray.900", "gray.900")}
      fontFamily={"monospace"}
      rounded={"full"}
      onClick={props.scrollToElement}
      px={6}
      _hover={{
        bg: "brand.brown",
      }}
    >
      {props.text ? props.text : "Learn more"}
    </Button>
  );
};

interface IButtonTelegram extends ButtonProps {
  title?: string;
  href?: string;
  text?: string;
  rest?: ButtonProps;
}
export const ButtonTelegram: React.FC<IButtonTelegram> = (props) => {
  return (
    <Box
      as={Link}
      title={props.title ?? "ToolFi link"}
      href={props.href ? props.href : CONFIG_SOCIAL.telegram.community}
      target="_blank"
    >
      <Button
        mt={"0.5em"}
        bg={"brand.yellow"}
        fontFamily={"monospace"}
        w="100%"
        rounded={"full"}
        px={6}
        _hover={{
          bg: "red.400",
        }}
      >
        {props.text ? props.text : `Trade now on Telegram`}
      </Button>
    </Box>
  );
};
export const ExternalStylizedButtonLink: React.FC<StylizedButtonLinkProps> = ({
  icon,
  href,
  text,
  title,
  children,
  ...rest
}) => {
  return (
    <Box as={LinkChakra} title={title} {...rest} href={href} target="_blank">
      <Button
        rel="noopener noreferrer"
        display="inline-flex"
        alignItems="center"
        width={"100%"}
      >
        {icon && <Icon as={icon} marginRight={2} />}
        {children}
      </Button>
    </Box>
  );
};

export default StylizedButtonLink;
