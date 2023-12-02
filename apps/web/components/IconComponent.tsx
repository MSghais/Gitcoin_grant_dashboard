import { Box, BoxProps, Image as ImageChakra } from "@chakra-ui/react";
// import Image from "next/image";
import Image from "next/legacy/image";
import React from "react";
import { useRef } from "react";

interface IconProps extends BoxProps {
  src: string;
  alt: string;
  size?: string;
  ref?: React.MutableRefObject<undefined>;
}

const IconComponent: React.FC<IconProps> = ({
  ref,
  src,
  alt,
  size = "24px",
  ...rest
}) => {
  return (
    <Box
      ref={ref}
      w={size}
      h={size}
    >

      <ImageChakra
        src={src}
        alt={alt}
        width={"100%"}
        height={"100%"}
      ></ImageChakra>
    </Box>
  );
};

export default IconComponent;
