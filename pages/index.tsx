import Image from "next/image";
import { Inter } from "next/font/google";
import { GetServerSideProps } from "next";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main>
      <div >
        <h1 className="text-red-500 text-4xl font-bold">Welcome to NFT DROP CHALLENGE</h1>
      </div>
    </main>
  );
}

