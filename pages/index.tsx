import { Inter } from "next/font/google";
import Blogs from "./component/blogs/Blogs";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="h-screen">
      <Blogs/>
    </main>
  );
}
