import { Counter } from "../components/Counter";
import { Header } from "../components/Header";

export const WordCounter = () => {
  return (
    <>
      <Header
        heading="Word Counter"
        subHeading="Free Online Character and Word Count Tool"
      />
      <Counter />
    </>
  );
};
