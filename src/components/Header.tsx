import { useEffect, useState } from "react";
import Button from "../composable/Button";
import Icon from "../composable/Icon";
import axios from "axios";
import Coran from "../interfaces/Coran";
import { chevronData } from "../data/data";
import DisplayCoran from "./DisplayCoran";

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
      <div className="flex justify-between z-10 sticky top-0 bg-black py-6">
        <div className="flex gap-2">
          {chevronData.map((item, index) => (
            <Icon
              key={index}
              className=" rounded-full bg-blackIcon"
              name={item.name}
              size={24}
              color={"gray"}
            />
          ))}
        </div>
        <div className="space-x-6">
          <Button className="text-gray" content="S'inscrire" />
          <Button
            content="Se connecter"
            className="text-black bg-white py-2 px-5 rounded-full"
          />
        </div>
      </div>
      <div className="text-white grid grid-cols-3 gap-3">
        {coran.radios.map((radio, index) => (
          <div className="flex">
            <DisplayCoran radio={radio} index={index} />
          </div>
        ))}
      </div>
    </header>
  );
}
