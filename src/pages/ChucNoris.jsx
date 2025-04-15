import { useEffect, useState } from "react";

const ChucNoris = () => {
  const [joke, setJoke] = useState("");
  const url = "https://api.chucknorris.io/jokes/random";

  const fetchJoke = async () => {
    const res = await fetch(url);
    const data = await res.json();
    setJoke(data.value);
  };

  useEffect(() => {
    fetchJoke();
  }, []);
  return (
    <>
      <div className="flex flex-col justify-center items-center ">
        <h1 className="text-4xl text-center mt-2 capitalize font-medium">
          Joke of the day
        </h1>
        <p className="text-center mt-10 text-2xl text-red-600 border-2 max-w-screen-sm h-[200px] p-4">
          {joke}
        </p>
      </div>
      <div className="flex justify-center mt-12">
        <button
          className="bg-green-600 border-black border-2 px-4 py-2 rounded-md text-white font-medium text-lg active:scale-90"
          onClick={fetchJoke}
        >
          Next Joke{" "}
        </button>
      </div>
    </>
  );
};

export default ChucNoris;
