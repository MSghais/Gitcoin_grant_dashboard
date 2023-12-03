import { Td, Tr } from "@chakra-ui/react";
import { Donors } from "../types";
import { fetchEnsName } from "@wagmi/core";

interface IDonorRow {
    d: Donors;
    i?: number;
}
export const DonorRow = ({ d, i }: IDonorRow) => {
    // let ensName= getEnsName(d?.id)
    const getEnsName = async (address: string) => {
        // let ensName = useEnsName({ address: address as `0x${string}` })
        let ensName = await fetchEnsName({ address: address as `0x${string}` })
        return ensName?.toString()
    }
    return (
        <Tr key={i}>
            <Td>{d?.id}</Td>
            <Td>{d?.amountUSD}</Td>
            {/* <Td>{getEnsName(d?.id)}</Td> */}
        </Tr>
    )

}