import { ConnectButton } from "@rainbow-me/rainbowkit";

export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-between p-24 bg-yellow-100">
      <div>
        <div>
          Rainbow Kit Template: Use this to quickly spin up Rainbow Kit.
        </div>
        <div><ConnectButton></ConnectButton></div>
      </div>
    </main>
  );
}
