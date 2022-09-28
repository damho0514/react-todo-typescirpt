import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import dummy from "../db/data.json";
import useFetch from "../hooks/useFetch";
import Word from "./Word";
export default function Day() {
  const { day } = useParams();
  // const [words, setWord] = useState([]);

  // useEffect(() => {
  //   fetch("http://localhost:3001/words")
  //     .then((res) => {
  //       res.json();
  //     })
  //     .then((data) => {
  //       setWord(data);
  //     });
  // }, []);
  const words = useFetch("http://localhost:3001/words");
  if (!words) {
    return null;
  }
  const wordList = words.filter((word) => word.day === Number(day));

  return (
    <>
      <h2>Day {day}</h2>
      <table>
        <tbody>
          {wordList.map((word) => (
            <Word key={word.id} word={word} />
          ))}
        </tbody>
      </table>
    </>
  );
}
