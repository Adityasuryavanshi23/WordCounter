import { useRef, useState } from "react";
import { Link } from "react-router-dom";

const WordCounter = () => {
  const [Character, setCharacter] = useState(0);
  const [Word, setWord] = useState(0);

  const input = useRef();

  const handleinput = () => {
    const value = input.current.value;
    setCharacter(value.length);
    value.length ? setWord(value.trim().split(/\s+/).length) : setWord(0);
  };

  const handleclear = () => {
    input.current.value = "";
    setCharacter(0);
    setWord(0);
  };

  return (
    <>
      <h1 className="text-4xl text-center">WordCounter</h1>

      <div className="flex flex-col justify-center items-center mt-12">
        <textarea
          ref={input}
          onChange={handleinput}
          name="input"
          id="input"
          className="w-[400px] h-[300px] border-b border-2 shadow-md"
          cols={12}
        ></textarea>
      </div>
      <div className="flex justify-between  mt-12 w-[400px] mx-auto">
        <button className="bg-blue-500 px-4 py-2 text-white rounded-md">
          Character : {Character}
        </button>
        <button
          onClick={handleclear}
          className={`bg-red-500 px-4 py-2 text-white rounded-md ${
            Character === 0 && "opacity-50 cursor-not-allowed"
          }`}
          disabled={Character === 0}
        >
          Clear
        </button>
        <button className="bg-blue-500 px-4 py-2 text-white rounded-md ">
          Word : {Word}
        </button>
      </div>
      <div className="text-center mt-12">
        <button className="capitalize bg-blue-500 px-4 py-2 text-white rounded-md ">
          <Link to={"chunoris"}>go to fun page</Link>
        </button>
      </div>
    </>
  );
};

export default WordCounter;
