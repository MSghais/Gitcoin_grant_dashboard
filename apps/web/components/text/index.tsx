import { Text } from "@chakra-ui/react";

interface ITextSubtitleContainer {
  title: string;
  align?: string;
}
export const TextSubtitleContainer = ({
  title,
  align,
}: ITextSubtitleContainer) => {
  return (
    <Text
      // textAlign={{ base: align ?? "center" }}
      fontFamily={"monospace"}
      // fontSize={{ base: "23px", md: "27px", lg: "29px" }}
      fontSize={{ base: "21px", md: "25px", lg: "27px" }}
    >
      {title}
    </Text>
  );
};


interface ITextSubtitleContainer {
  title: string;
  align?: string;
}
export const TextHeaderPage = ({
  title,
  align,
}: ITextSubtitleContainer) => {
  return (
    <Text
      fontWeight={500}
      fontFamily={"PressStart2P"} 

      // textAlign={{ base: align ?? "center" }}
      // fontSize={{ base: "25px", md: "29px", lg: "31px" }}
      fontSize={{ base: "25px", md: "31px", lg: "35px" }}
    >
      {title}
    </Text>
  );
};
