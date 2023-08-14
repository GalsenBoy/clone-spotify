import { useEffect, useState } from "react";
import Button from "../composable/Button";
import Icon from "../composable/Icon";
import axios from "axios";

export default function Header() {
  const [data, setData] = useState([]);
  // const clientId = import.meta.env.VITE_SPOTIFY_CLIENT_ID;

  const chevronData = [
    {
      name: "ChevronLeft",
    },
    {
      name: "ChevronRight",
    },
  ];

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://mp3quran.net/api/v3/radios?language=eng"
        );
        setData(response.data);
        console.log(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <header
      style={{ gridRow: "-3/-1" }}
      className="flex justify-between  bg-black p-6 my-2 mr-2 rounded-md w-full"
    >
      <div className="flex gap-2">
        {chevronData.map((index, item) => (
          <Icon
            key={item}
            className=" rounded-full bg-blackIcon"
            name={index.name}
            size={24}
            color={"red"}
          />
        ))}
      </div>
      <div className="space-x-6">
        <Button content="S'inscrire" />
        <Button
          content="Se connecter"
          className="text-black bg-white py-2 px-5 rounded-full"
        />
      </div>
      <div>
        {/* {data.map((dat, index) => {
          return <li>{dat.native}</li>;
        })} */}
      </div>
    </header>
  );
}
