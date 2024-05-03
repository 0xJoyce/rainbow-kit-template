## Rainbow Kit Template

Use this to quickly set up rainbow kit.
-Next App Router with /src directory.

Steps:
1. Create Github Repo.
2. Clone GitHub Repo in Development Directory.
3. run: npx create-next-app@latest
4. Install Rainbow Kit using *manual setup*: npm install @rainbow-me/rainbowkit wagmi viem@2.x @tanstack/react-query   Here is the official link: https://www.rainbowkit.com/docs/installation
5. Create Project and get a project ID from Wallet Connect.
6. Create a Rainbow Kit Import component.  Add use client.  Then import the Rainbow Kit, Wagmi and TanStack Query into layout.js root file.  Wagmi config goes in here too.
7. Import and add the ConnectButton where you want it.
