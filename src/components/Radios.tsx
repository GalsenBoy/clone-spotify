import { useEffect, useState } from "react";
import axios from "axios";
import Artiste from "../interfaces/Artiste";
export default function Radios() {
  const [artistes, setArtistes] = useState<Artiste[]>([]);
  const [isLoading,setIsLoading] = useState<boolean>(false)

  const options = {
    method: "GET",
    url: "https://billboard-api2.p.rapidapi.com/hot-100",
    params: {
      date: "2019-05-11",
      range: "1-10",
    },
    headers: {
      "X-RapidAPI-Key": "a9cb716eacmsh9bb76c72e20eb2ep1d72c1jsn5dd5a8efe590",
      "X-RapidAPI-Host": "billboard-api2.p.rapidapi.com",
    },
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.request(options);
        setArtistes(response.data.content);
        console.log(response.data.content);
        setIsLoading(true)
      } catch (error) {
        console.error(error)
        // if (error.response.status === 429) {
        //   // Erreur 429, réessayer après un certain délai (par exemple, 5 secondes)
        //   setTimeout(() => {
        //     fetchData();
        //   }, 5000);
        // } else {
        //   console.error("Error fetching data:", error);
        // }
      }
    };
  
    fetchData();
  }, []);
  

  return (
    <div className="text-white grid grid-cols-3 gap-3">
      {artistes?.map((artiste, index) => (
        <div key={index} className="flex">
          <p>{artiste.title}</p>
        </div>
      ))}
    </div>
  );
}
