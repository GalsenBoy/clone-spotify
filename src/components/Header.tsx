import { useEffect, useState } from "react";
import Button from "../composable/Button";
import Icon from "../composable/Icon";
import axios from "axios";
import Coran from "../interfaces/Coran";
import { chevronData } from "../data/data";

export default function Header() {
  const [coran, setCoran] = useState<{ radios: Coran[] }>({ radios: [] });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://mp3quran.net/api/v3/radios?language=eng"
        );
        setCoran(response.data);
        // console.log(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <header
      style={{ gridRow: "-3/-1" }}
      className="  bg-black px-6 pb-6 my-2 mr-2 rounded-md w-full overflow-auto"
    >
      <div className="flex justify-between sticky top-0 bg-black pt-6">
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
      </div>

      <ul className="text-white">
        {coran.radios.map((radio, index) => (
          <li key={index}>{radio.name}</li>
        ))}
      </ul>
    </header>
  );
}
