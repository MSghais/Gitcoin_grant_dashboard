import { Donors } from "../../types";
import {
  Box,
  Button,
  Link,
  Text,
  useColorModeValue,
  useToast,
  Input,
  Select,
} from "@chakra-ui/react";

interface IDonorView {
  donor: Donors;
  index: number;
}

const DonorsView = ({ donor, index }: IDonorView) => {
  const bg = useColorModeValue("white", "gray.900");
  return (
    <Box
      key={index}
      w={{ sm: "100%", md: "540px" }}
      bg={bg}
      // height={{ sm: '476px', md: '20rem' }}
      height={{ base: "150px" }}
      // eslint-disable-next-line react-hooks/rules-of-hooks
      boxShadow={"2xl"}
    >
      <Text>{donor.id}</Text>

      <Text>USD: {donor.amountUSD}</Text>

      <Text>Votes: {donor.votes}</Text>
    </Box>
  );
};
export default DonorsView;
