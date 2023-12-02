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
   Select
} from "@chakra-ui/react";
import axios from "axios";
import HeaderSEO from "../components/HeaderSEO";
import { useAccount, useNetwork, usePublicClient } from "wagmi";
import { providers } from "ethers";
import { useSelector } from "react-redux";
import { RootState } from "../store";
import { Donors, Grant } from "../types";
import DonorsView from "../components/donors";
const CONFIG_GITCOIN= {
  url:"https://grants-stack-indexer.gitcoin.co/data/",
  price:``

}
interface MyPageProps {
  grants: Grant[];
}
const Home: NextPage<MyPageProps> = ({ grants }) => {
  const toast = useToast();
  const [signer, setSigner] = useState<providers.JsonRpcSigner | undefined>();
  const [chainId, setChainId] = useState<number| undefined>();
  const [roundAddress, setRoundAddress] = useState<string| undefined>();
  const [urlRoundProject, setUrlRoundProject] = useState<string| undefined>();
  const [selectApplicationId, setApplicationId] = useState<string| undefined>();
  const color = useColorModeValue("gray.900", "gray.300");
  const selectChangeEvent = (value: string) => {
    console.log("selectChangeEvent");
    console.log("value", value);
    setChainId(Number(value));
  };

  const [donors, setDonors ] = useState<Donors[]>()


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
    console.log("handleGetData")
    console.log("get data")
    if(chainId && roundAddress && selectApplicationId) {
      const res= await axios.get(`https://grants-stack-indexer.gitcoin.co/data/${chainId}/rounds/${roundAddress}/applications/${selectApplicationId}/contributors.json`)
      console.log("res",res)
      setDonors(res?.data)
    }

    /** TODO url finding */
    if(urlRoundProject) {
      
    }
  }
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

      >
        {/* <ModalCreateView></ModalCreateView> */}
        <Box
          display={{ lg: "flex" }}
          justifyContent={"space-evenly"}

        >
          <Box
            textAlign={{ base: "left", md: "center" }}
            p={{ base: "1em" }}
            minH={{ sm: "70vh" }}
            color={color}
          >

            <Box textAlign={"left"}
            >

              <Text
                fontFamily={"PressStart2P"}
                fontSize={{ base: "19px", md: "23px", lg: "27px" }}

              // className="text-header"
              >
                 Gitcoin donors Beta 👋
              </Text>

              <Box
              display={"flex"}
              gap="1em"
              >

              <Select placeholder='Select chain ID'
                onChange={(e: ChangeEvent<HTMLSelectElement>) => {
                  selectChangeEvent(e.target.value);
                }}
              >
                <option value='1'> 1</option>
                <option value='10'> 10</option>
                <option value='137'>137</option>
                <option value='250'>250</option>
                <option value='42161'>42161</option>
                <option value='421613'>421613</option>
                <option value='424'>424</option>
                <option value='80001'>80001</option>
              </Select>

              <Input
              onChange={(e) => {
                console.log("e.target.value")
                selectRoundAddress(e.target.value)
                
              }}
              
              >
              </Input>

          </Box>
          <Text>Select your application id</Text>
          <Input

          placeholder="application id"
                        onChange={(e) => {
                          console.log("e.target.value")
                          handleApplicationId(e.target.value)
                          
                        }}
                        
                        >
                        </Input>
              <Button

              onClick={handleGetData}
              >

                Get donors
              </Button>



              <Text fontFamily={"monospace"}>
                Here you can find : Donors of a Gitcoin round by project.
              </Text>


              <Box
              gap={{base:'0.5em'}}
              display={'grid'}
              >
                {donors && donors?.length > 0 && 
                
                donors.map((d,i)=> {
                  return(
                    <DonorsView donor={d} index={i}/>
                  )
                })}
              </Box>
           


            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Home;
