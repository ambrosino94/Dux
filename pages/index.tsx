import type { NextPage } from "next";
import NextLink from "next/link";

const Home: NextPage = () => {
  return (
    <div style={{ margin: 50 }}>
      <h1>Dux</h1>

      <ul>
        <li>
          <a href="/home">Home</a>
        </li>
        <li>
          <NextLink href="/app">App</NextLink>
        </li>
      </ul>
    </div>
  );
};

export default Home;
