import { IconType } from "react-icons";

export interface Grant {
  id?:string;
  address?:string;
  chaindId?:string;
  totalDonors?:number;
  totalReceived?:number;
}

export interface Donors {
  id?:string;
  amountUSD?:number;
  votes?:number;
  ensName?:string;
  // chaindId?:string;
  // totalDonors?:number;
  // totalReceived?:number;
}

export interface Round {
  id?:string;
  amountUSD?:number;
  votes?:number;
  uniqueContributors?:number;
  roundEndTime?:number;
  roundStartTime?:number;
  metadata?: {
    name?:string;
  }
  // chaindId?:string;
  // totalDonors?:number;
  // totalReceived?:number;
}


export interface LinkItemProps {
  name: string;
  icon: IconType;
  href: string;
  target?: string;
  isExternal?: boolean;
  isSubmenu?: boolean;
  title?: string;
  linksSubmenu?: LinkItemProps[];
}