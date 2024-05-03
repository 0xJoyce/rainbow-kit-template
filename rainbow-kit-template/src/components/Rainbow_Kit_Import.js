// Needs to be on the client side.
"use client";

// Import Rainbow things

import "@rainbow-me/rainbowkit/styles.css";
import { getDefaultConfig, RainbowKitProvider } from "@rainbow-me/rainbowkit";
import { WagmiProvider } from "wagmi";
import { mainnet } from "wagmi/chains";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";

//WAGMI Config//

const config = getDefaultConfig({
  appName: "Rainbow Kit Template",
  projectId: "d6f38ec082be2a4dea887a1ae2a6822e",
  chains: [mainnet],
  ssr: true, // If your dApp uses server side rendering (SSR)
});

//Create new QueryClient
const queryClient = new QueryClient();

export default function RainbowKitImport({ children }) {
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
          <RainbowKitProvider>{children}</RainbowKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  );
}
