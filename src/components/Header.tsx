import { useEffect, useState } from "react";
import Button from "../composable/Button";
import Icon from "../composable/Icon";
import axios from "axios";
import Coran from "../interfaces/Coran";

export default function Header() {
  const [coran, setCoran] = useState<{ radios: Coran[] }>({ radios: [] });

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
        setCoran(response.data);
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
        {chevronData.map((item, index) => (
          <Icon
            key={index}
            className=" rounded-full bg-blackIcon"
            name={item.name}
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
        <div>
          <ul className="text-white">
            {coran.radios.map((radio, index) => (
              <li key={index}>{radio.name}</li>
            ))}
          </ul>
        </div>
      </div>
    </header>
  );
}
