import { useEffect, useState } from "react";
import axios from "axios";
import Coran from "../interfaces/Coran";
import DisplayCoran from "./DisplayCoran";
import TopHeader from "./TopHeader";

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
      <TopHeader />
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
