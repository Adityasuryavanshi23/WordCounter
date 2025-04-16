import { Header } from "../components/Header";
import { Joke } from "../components/joke";

export const ChucNoris = () => {
  return (
    <>
      <Header
        heading={"Chuck Norris Joke"}
        subHeading={"Chuck Norris Joke online free tool"}
      />
      <Joke />
    </>
  );
};
