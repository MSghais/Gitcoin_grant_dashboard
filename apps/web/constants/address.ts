// interface ChainAddresses {
//   [chainId: string | number]: {
//     [{
//       [addressName]: string,
//       [title]: string,
//       [address]: string,
//       [image]: string,

//     }

//     ]
//     // [mintPool: string]: string,
//   };
// }
interface ContractAddressByChain {
  erc721Factory?: string;
  erc20Factory?: string;
  mintErc721Factory?: string;
  mintErc20Factory?: string;
}

interface ChainAddresses {
  [chainId: string | number]: ContractAddressByChain;
}

export const CONTRACT_DEPLOYED: ChainAddresses = {
  1: {},
  5: {
    // erc721Factory:"0x415Db49c101Fa5E14C45961B767bB03B51d152aa",
    // erc20Factory:"0xFBDcd5DD442D101650DDF881164D372e67EA2662",
    erc721Factory: "0xF664c06e95B89790Ff8339EaACEC2fAac49766a2",
    erc20Factory: "0x74fb8ac61288b3EDAA992d7450238cff9D2dD7A4",
  },
  5001: {
    // mantle testnet
    // erc721Factory:"0x415Db49c101Fa5E14C45961B767bB03B51d152aa",
    // erc20Factory:"0xFBDcd5DD442D101650DDF881164D372e67EA2662",
  },
  534351: {
    // scroll sepolia
    // erc20Factory:"0xB191F16f7ee7c0E17884Bc7ABa643dd9f11e0450",
    // erc20Factory:"0x447A0330585c98672D1532d20567A653260016c3",
    // erc721Factory:"0x30CE142E9D6827e1D0ED66D40ce8dD02c2A06434",
    erc20Factory: "0x63404E1DdeE26c7597ad2265fE650f281980f95A",
    erc721Factory: "0x41569DF941E2f27B9c9bBC9Aeae8Be0fD6C3dA44",
  },
  11155111: {
    // sepolia

    erc20Factory: "0xB191F16f7ee7c0E17884Bc7ABa643dd9f11e0450",
    erc721Factory: "0x24c76c72bace4d61b8392418205B25EcC5BB39e0",
  },
};

interface ChainAddressesTips {
  // [chainId: string | number]: TokenTips[]

  [chainId: string | number]: TokenTips[];
}

interface TokenTips {
  title?: string;
  image?: string;
  address?: string;
  value?: string;
}

// export const TOKEN_TIPS:Map<ChainAddresses, > = {
export const TOKEN_TIPS: ChainAddressesTips = {
  1: [
    {
      title: "APE",
      address: "0x4d224452801aced8b2f0aebe155379bb5d594381",
      image: "/assets/apecoin.svg",
    },
    {
      title: "sDai",
      address: "0x83F20F44975D03b1b09e64809B757c47f942BEeA",
      value: "0x83F20F44975D03b1b09e64809B757c47f942BEeA",
    },
  ],
  5: [
    {
      title: "APE",
      address: "0x4d224452801aced8b2f0aebe155379bb5d594381",
      value: "0x4d224452801aced8b2f0aebe155379bb5d594381",
      image: "/assets/apecoin.svg",
    },
    {
      title: "sDai",
      address: "0xD8134205b0328F5676aaeFb3B2a0DC15f4029d8C",
      value: "0xD8134205b0328F5676aaeFb3B2a0DC15f4029d8C",
      image: "/assets/spark.svg",
    },
    {
      title: "WUW",
      address: "0xEb281403eF3147A835eF94a9dCb3A605435c6cf5",
      value: "0xEb281403eF3147A835eF94a9dCb3A605435c6cf5",
    },
  ],
  137: [
    {
      title: "APE",
      address: "0xb7b31a6bc18e48888545ce79e83e06003be70930",
      value: "0xb7b31a6bc18e48888545ce79e83e06003be70930",
      image: "/assets/apecoin.svg",
    },
  ],
  // Testnet BNB: 0x7D8d05D1fA924d360A4Db25d1c089211Fd90a76d
};
