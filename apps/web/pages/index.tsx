import type { GetServerSideProps, NextPage, NextPageContext } from "next";
import Head from "next/head";
import { useEffect, useState, useRef, ChangeEvent } from "react";
import {
  Box,
  Button,
  Link,
  Text,
  useColorModeValue,
  useToast,
  Input,
  Select,
  TableContainer,
  Table,
  Tr,
  Thead,
  Th,
  Tbody,
  Td,
  Card,
} from "@chakra-ui/react";
import axios from "axios";
import HeaderSEO from "../components/HeaderSEO";
import { useAccount, useNetwork, usePublicClient } from "wagmi";
import { providers } from "ethers";
import { useSelector } from "react-redux";
import { RootState } from "../store";
import { Donors, Grant } from "../types";
import DonorsView from "../components/donors";
import { extractParamsRoundGrant } from "../utils/get_params";
import { FaOrcid } from "react-icons/fa";
const CONFIG_GITCOIN = {
  url: "https://grants-stack-indexer.gitcoin.co/data/",
  price: ``,
};
interface MyPageProps {
  grants: Grant[];
}
interface IStatsRounds {
  totalUSD?: number;
  totalETH?: number;
  totalVotes?: number;
  totalContributors?: number;
}

interface IRoundDetails {
  title?: string;
  address?: string;
  description?: string;
}
const Home: NextPage<MyPageProps> = ({ grants }) => {
  const toast = useToast();
  const [signer, setSigner] = useState<providers.JsonRpcSigner | undefined>();
  const [chainId, setChainId] = useState<number | undefined>();
  const [roundAddress, setRoundAddress] = useState<string | undefined>();
  const [urlRoundProject, setUrlRoundProject] = useState<string | undefined>();
  const [isDataStatsCalculated, setIsDataStatsCalculate] =
    useState<boolean>(false);
  const [donors, setDonors] = useState<Donors[]>();
  const [selectApplicationId, setApplicationId] = useState<
    string | undefined
  >();
  const [statsRound, setStatsRound] = useState<IStatsRounds | undefined>();

  useEffect(() => {
    const calculateStats = () => {
      let totalUSD = 0;
      let votes = 0;
      donors.map((d, i) => {
        totalUSD += d?.amountUSD;
        votes += d?.votes;
      });

      setStatsRound({
        totalUSD: totalUSD,
        totalVotes: votes,
        totalContributors: donors?.length,
      });
    };

    if (donors && donors.length > 0 && !isDataStatsCalculated) {
      calculateStats();
    }
  }, [isDataStatsCalculated, donors]);
  const color = useColorModeValue("gray.900", "gray.300");
  const selectChangeEvent = (value: string) => {
    console.log("selectChangeEvent");
    console.log("value", value);
    setChainId(Number(value));
  };

  const selectRoundAddress = (value: string) => {
    console.log("selectRoundAddress");
    console.log("value", value);
    setRoundAddress(value);
  };

  const handleApplicationId = (value: string) => {
    console.log("handleApplicationId");
    setApplicationId(value);
  };
  const handleGetData = async () => {
    try {
      console.log("handleGetData");
      console.log("get data");

      const allRounds = await axios.get(
        "https://grants-stack-indexer.gitcoin.co/data/10/rounds/"
      );
      console.log("allRounds", allRounds);
      if (chainId && roundAddress && selectApplicationId) {
        const res = await axios.get(
          `https://grants-stack-indexer.gitcoin.co/data/${chainId}/rounds/${roundAddress}/applications/${selectApplicationId}/contributors.json`
        );
        console.log("res", res);
        setDonors(res?.data);
        toast({
          title: "Grant donors fetch",
        });
      }

      /** TODO url finding */
      if (urlRoundProject) {
        let url = urlRoundProject;

        const { address, applicationId, chainIdString } =
          extractParamsRoundGrant(url);

        console.log("chainIdString", chainIdString);
        console.log("applicationId", applicationId);
        console.log("address", address);
        url = url.replace("https://explorer.gitcoin.co/#/", "");
        console.log("url", url);

        if (address && applicationId && chainIdString) {
          // const res = await axios.get(
          //   `https://grants-stack-indexer.gitcoin.co/data/${chainIdString}/rounds/${address}/applications/${address}-${applicationId}/contributors.json`
          // );
          const res = await axios.get(
            `https://grants-stack-indexer.gitcoin.co/data/${chainIdString}/rounds/${address.toUpperCase()}/applications/${applicationId}/contributors.json`
          );
          console.log("res", res);
          setDonors(res?.data);
          toast({
            title: "Grant donors fetch",
          });
        }
      }
    } catch (e) {
      console.log("handleGetData error", e);
    }
  };
  return (
    <>
      <HeaderSEO></HeaderSEO>

      <Box
        // as="main"
        height={"100%"}
        width={"100%"}
        minH={{ sm: "70vh" }}
        overflow={"hidden"}
        alignContent={"center"}
        justifyItems={"center"}
        justifyContent={"center"}
        alignItems={"center"}
        textAlign={"center"}
        display={"grid"}
      >
        <Text
          fontFamily={"PressStart2P"}
          fontSize={{ base: "19px", md: "21px", lg: "23px" }}
        >
          Gitcoin donors Dashboard Beta 👋
        </Text>
        <Text
          fontFamily={"PressStart2P"}
          fontSize={{ base: "13px", md: "15px", lg: "17px" }}
        >
          Here you can find :
        </Text>
        <Text
          fontFamily={"monospace"}
          fontSize={{ base: "13px", md: "15px", lg: "17px" }}
        >
          Donors of a Gitcoin round by project.
        </Text>

        <Box
          display={{ lg: "flex" }}
          justifyContent={"space-evenly"}
          gap="1em"
          textAlign={{ base: "left", md: "center" }}
          p={{ base: "1em" }}
          minH={{ sm: "30vh" }}
          color={color}
        >
          <Box textAlign={"left"} boxShadow={"xl"} borderRadius="lg">
            <Box display={"flex"} gap="1em">
              <Box>
                <Text>Select chain id</Text>

                <Select
                  placeholder="Select chain ID"
                  onChange={(e: ChangeEvent<HTMLSelectElement>) => {
                    selectChangeEvent(e.target.value);
                  }}
                >
                  <option value="1"> 1</option>
                  <option value="10"> 10</option>
                  <option value="137">137</option>
                  <option value="250">250</option>
                  <option value="42161">42161</option>
                  <option value="421613">421613</option>
                  <option value="424">424</option>
                  <option value="80001">80001</option>
                </Select>
              </Box>

              <Box>
                <Text>Add url of your round project:</Text>

                <Input
                  placeholder="Select round address"
                  onChange={(e) => {
                    console.log("e.target.value");
                    selectRoundAddress(e.target.value);
                  }}
                ></Input>
              </Box>
            </Box>
            <Text>Select your application id</Text>
            <Input
              placeholder="application id"
              onChange={(e) => {
                console.log("e.target.value");
                handleApplicationId(e.target.value);
              }}
            ></Input>
            <Button onClick={handleGetData}>Get donors</Button>
          </Box>

          <Box p={{ base: "0.5em" }}>
            <Text fontFamily={"PressStart2P"} textAlign={{ base: "center" }}>
              OR:
            </Text>
          </Box>

          <Box borderRadius="lg" boxShadow={"xl"} gap="1em">
            <Text>Add url of your round project:</Text>

            <Input
              placeholder="https://explorer.gitcoin.co/#/round/10/0xc34745b3852df32d5958be88df2bee0a83474001/0xc34745b3852df32d5958be88df2bee0a83474001-60"
              onChange={(e) => {
                console.log("e.target.value");
                setUrlRoundProject(e.target.value);
              }}
            ></Input>

            <Text>Please verify: </Text>
            <Text>The exact round address with Lower and Uppercase</Text>

            <Button p={{ base: "0.5em" }} onClick={handleGetData}>
              Check url grant
            </Button>
          </Box>
        </Box>

        {statsRound && (
          <Box
            textAlign={"left"}
            boxShadow={"2xl"}
            borderRadius="lg"
            gap="1em"
            p={{ base: "0.5em", md: "1em" }}
          >
            <Text
              fontFamily={"PressStart2P"}
              fontSize={{ base: "13px", md: "15px", lg: "17px" }}
            >
              Stats round data
            </Text>
            {/* <Text>Total USD: {statsRound?.totalUSD}</Text>
            <Text>Contributors: {statsRound?.totalContributors}</Text> */}

            <Box display={"flex"} gap="1em">
              <Card>
                <Text>Total USD: {statsRound?.totalUSD}</Text>
              </Card>
              <Card>
                <Text>Contributors: {statsRound?.totalContributors}</Text>
              </Card>
            </Box>
            {/* <Text>Total votes: {statsRound?.totalVotes}</Text> */}
          </Box>
        )}

        <Text textAlign={"left"}>
          Contributors: {statsRound?.totalContributors}
        </Text>

        <TableContainer>
          <Table>
            <Thead>
              <Tr>
                <Th>Address</Th>
                <Th>Total USD</Th>
                {/* <Th isNumeric>multiply by</Th> */}
              </Tr>
            </Thead>
            <Tbody>
              {donors &&
                donors?.length > 0 &&
                donors.map((d, i) => {
                  return (
                    <Tr key={i}>
                      <Td>{d?.id}</Td>
                      <Td>{d?.amountUSD}</Td>
                      {/* <Td isNumeric>25.4</Td> */}
                    </Tr>
                  );
                })}
            </Tbody>
          </Table>
        </TableContainer>
{/* 
        <Box
          gap={{ base: "0.5em" }}
          display={"grid"}
          gridTemplateColumns={{ lg: "repeat(2,1fr)" }}
        >
          {donors &&
            donors?.length > 0 &&
            donors.map((d, i) => {
              return <DonorsView donor={d} index={i} />;
            })}
        </Box> */}
      </Box>
    </>
  );
};

export default Home;
