import {Paywall, Plan, StiggProvider, useStiggContext} from "@stigg/react-sdk";
import {useEffect, useState} from "react";

const STIGG_CLIENT_API_KEY = "$2b$10$AyLF3/ctHts4M5GnlETDH.4maZUCxzz1JQFxIsyVBoxciRUbPULHi:e7b8aabd-64b8-436c-902b-bf81a6025cf0";
const STIGG_CUSTOMER_ID = 'p2mtkzYJTLHaCuAS965si6';


export const PricingPlans = () => {
  return (
    <StiggProvider
      theme={{
        layout: {
          planMinWidth: '320px',
          planMaxWidth: '360px'
        }
      }}
      customerId={STIGG_CUSTOMER_ID}
      apiKey={STIGG_CLIENT_API_KEY}>
      <Paywall onPlanSelected={({ plan }: { plan: Plan }) => {
        console.log(`Selected plan: ${plan.displayName}`);
      }}/>
    </StiggProvider>
  )
}