/**
 *
 * @param url 'https://explorer.gitcoin.co/#/round/10/0xc34745b3852df32d5958be88df2bee0a83474001/0xc34745b3852df32d5958be88df2bee0a83474001-6';
 */
export const extractParamsRoundGrant = (url: string) => {
  // Parse the URL
  const urlParts = new URL(url);
  console.log("urlParts:", urlParts);

  // Extract the desired parts
//   const pathnameParts = urlParts.pathname.split("/");
const pathnameParts = urlParts.href.split("/");

  console.log("pathnameParts:", pathnameParts);

  const chainIdString = pathnameParts[pathnameParts.indexOf("round") + 1]; // Extracts '10'.
  console.log("chainId:", chainIdString);

  const addressRound = pathnameParts[pathnameParts.indexOf(chainIdString) + 1]; // Extracts '0xc34745b3852df32d5958be88df2bee0a83474001'
  const applicationId = pathnameParts[pathnameParts.length - 1].split("-")[1]; // Extracts '6'

  console.log("addressRound Parameter:", addressRound);
  console.log("applicationId Part:", applicationId);

  return {
    chainIdString:chainIdString,
    address:addressRound,
    applicationId:applicationId,

  }
};
