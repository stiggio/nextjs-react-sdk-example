import {Paywall, Plan, StiggProvider} from "@stigg/react-sdk";

// Using the demo app API key, replace with your own client API key
const STIGG_CLIENT_API_KEY = "$2b$10$ouA6M7FOJSxHH/3mkjZnZOJf5lUmFPvj8G0h1zIQxRkOY9CrpY53.:248ec79b-0932-4157-b514-30375bf5eeb8";

export const PricingPlans = () => {
  return (
    <StiggProvider
      theme={{
        layout: {
          planMinWidth: '320px',
          planMaxWidth: '360px'
        }
      }}
      apiKey={STIGG_CLIENT_API_KEY}>
      <Paywall onPlanSelected={({ plan }: { plan: Plan }) => {
        console.log(`Selected plan: ${plan.displayName}`);
      }}/>
    </StiggProvider>
  )
}