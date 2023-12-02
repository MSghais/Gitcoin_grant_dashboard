import {
  Button,
  Box,
  Flex,
  Text,
  Drawer,
  Menu,
  MenuButton,
  HStack,
  chakra,
  Container,
  SimpleGrid,
  Stack,
  VisuallyHidden,
  Input,
  IconButton,
  useColorModeValue,
  Image as ImageChakra,
  Link as LinkChakra,
  ButtonProps,
  LinkProps,
} from "@chakra-ui/react";

import { ReactNode } from "react";
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import { BiCoffee, BiMailSend } from "react-icons/bi";
import Link from "next/link";
import React from "react";
import { MdEmail, MdPhone, MdWeb } from "react-icons/md";
import Image from "next/image";
import { BsFacebook, BsInstagram, BsTelegram, BsTwitter } from "react-icons/bs";
import { CONFIG_SOCIAL, CONFIG_WEBSITE } from "../constants";
import { IoLogoInstagram, IoSwapHorizontal } from "react-icons/io5";
import IconComponent from "../components/IconComponent";

export const Footer = (props: any) => {
  const [show, setShow] = React.useState(false);
  const toggleMenu = () => setShow(!show);

  return (
    <Flex
      as="footer"
      align="center"
      textAlign={"left"}
      wrap="wrap"
      w="100%"
      box-shadow="var(--chakra-shadows-md)"
      marginTop={"5em"}
      mb={8}
      p={8}
      {...props}
    >
      <Flex align="center"></Flex>

      <Box display={{ base: "block", md: "none" }} onClick={toggleMenu}></Box>

      <Box display={{ base: "block" }} flexBasis={{ base: "100%", md: "auto" }}>
        <Flex>
          <Link
            target={"_blank"}
            passHref
            href="mailto:wuw.whateveryouwant@gmail.com"
          >
            <a
              rel="noopener noreferrer"
              target="_blank"
              href="mailto:wuw.whateveryouwant@gmail.com"
            >
              {"Email"}
            </a>
          </Link>
        </Flex>
      </Box>
    </Flex>
  );
};

interface ILogoProps {
  imgSrc?: string;
  props: any;
}
const Logo = (args: ILogoProps) => {
  return (
    <svg
      height={32}
      // src="/assets/logo/france_certif_logo.svg"
      src={args.imgSrc ? args.imgSrc : "/assets/logo/fltm_logo.svg"}
      alt="FLTM - Vos formations en Transport, Logistique et Management"
      viewBox="0 0 120 28"
      xmlns="http://www.w3.org/2000/svg"
      {...args.props}
    ></svg>
  );
};

export const SocialButton = ({
  children,
  label,
  href,
  isExternal,
  title,
  rest,
}: {
  children: ReactNode;
  label: string;
  href: string;
  title?: string;
  isExternal?: boolean;
  rest?: LinkProps;
}) => {
  return (
    <chakra.button
      bg={useColorModeValue("blackAlpha.100", "whiteAlpha.100")}
      // title={label}
      title={title}
      // {...rest}
      rounded={"full"}
      w={8}
      h={8}
      cursor={"pointer"}
      as={"a"}
      href={href}
      display={"inline-flex"}
      alignItems={"center"}
      justifyContent={"center"}
      target={isExternal ? "_blank" : "_parent"}
      transition={"background 0.3s ease"}
      _hover={{
        bg: useColorModeValue("blackAlpha.200", "whiteAlpha.200"),
      }}
    >
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  );
};

export default function FooterLarge() {
  return (
    <Box
      bg={useColorModeValue("gray.100", "gray.900")}
      color={useColorModeValue("gray.700", "gray.100")}
      mt={{ base: "0.5em", md: "1em" }}
      pb={{ base: "1.3em", md: "1.5em" }}
      borderColor={useColorModeValue("gray.100", "green.100")}
      width={"100%"}
      as="footer"
    >
      <Container as={Stack} maxW={"6xl"} py={10}>
        <Box
          alignSelf="center"
          pb={"1em"}
          display={{ base: "block", xl: "grid" }}
          gridTemplateColumns={"2fr 1fr"}
          alignItems="end"
          gap={{ md: "15%" }}
          justifyItems={"stretch"}
        >
          <Box textAlign={{ base: "left", md: "center" }}>
            <Box display={"flex"} gap="0.5em">
              <Text>You can buy us a coffee</Text>
              <BiCoffee></BiCoffee>
            </Box>
            <Box
              display={{ md: "flex" }}
              gap="0.5em"
              textAlign={{ base: "left", md: "center" }}
            >
              <Text>Send it here:</Text>
              <Text>0x26d27D784aed2a6d1b4C24f63846a17be899ef2d</Text>
            </Box>
          </Box>
          <Stack
            alignItems={{ sm: "center", md: "flex-start" }}
            paddingTop={"1em"}
            order={{ base: "2", md: "1" }}
          >
            <Stack
              display="grid"
              borderRadius={{ base: "3px" }}
              border={{ base: "3px" }}
              borderColor={useColorModeValue("green.100", "green.100")}
            >
              <Box
                width={{ base: "150x", md: "250px", lg: "250px" }}
                height={{ base: "150x", md: "150px", lg: "170px" }}
                textAlign={"center"}
                justifyContent={"center"}
                alignContent={"center"}
              >
                <IconComponent
                  src="/assets/WUW_logo_title.svg"
                  alt="ToolFi Bot"
                  size="150px"
                />
              </Box>
            </Stack>

            <Text textAlign={{ base: "left", md: "center" }}>
              {" "}
              Made by {CONFIG_WEBSITE.title} - © {new Date().getFullYear()}.
            </Text>
            <Text>Gitcoin grant lover</Text>
          </Stack>
          <Box justifyContent={"center"} paddingTop={"1em"}>
            <Text textAlign={{ base: "left", md: "center" }}>
              Socials link of WUW community
            </Text>
            <Stack
              direction={"row"}
              gridTemplateColumns={"repeat(3,50px)"}
              spacing={6}
              pt={"2em"}
              justifyContent={"center"}
            >
              <SocialButton
                isExternal={true}
                title="WUW Whatever You Want - Portal to understand the product"
                label="Twitter"
                href={CONFIG_WEBSITE?.page?.portal}
              >
                <MdWeb></MdWeb>
              </SocialButton>

              <SocialButton
                isExternal={true}
                title="WUW Whatever You Want - Twitter OG Friends Community"
                label="Twitter"
                href={CONFIG_SOCIAL.twitter.link}
              >
                <BsTwitter></BsTwitter>
              </SocialButton>
              <SocialButton
                isExternal={true}
                title="WUW-Whatever You Want - Youtube Channel Community"
                label="Youtube"
                href={CONFIG_SOCIAL.youtube.link}
              >
                <FaYoutube></FaYoutube>
              </SocialButton>
              <SocialButton
                isExternal={true}
                title="WUW-Whatever You Want Community in Telegram"
                label="Twitter"
                href={CONFIG_SOCIAL.telegram.community}
              >
                <BsTelegram></BsTelegram>
              </SocialButton>

              <SocialButton
                isExternal={true}
                title="WUW-Whatever You Want Community in Facebook"
                label="Facebook"
                href={CONFIG_SOCIAL.facebook.link}
              >
                <BsFacebook></BsFacebook>
              </SocialButton>

              <SocialButton
                isExternal={true}
                title="WUW-Whatever You Want Community in Instagram"
                label="Instagram WUW-Whatever You Want"
                href={CONFIG_SOCIAL.instagram.link}
              >
                <IoLogoInstagram></IoLogoInstagram>
              </SocialButton>
            </Stack>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
