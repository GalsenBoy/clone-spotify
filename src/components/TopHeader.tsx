import Button from "../composable/Button";
import Icon from "../composable/Icon";
import Link from "../composable/Links";
import { chevronData } from "../data/data";
import { useState, useEffect } from "react";
import axios from "axios";
import IAlbums from "../interfaces/Albums";

export default function TopHeader() {
  const clientId = import.meta.env.VITE_SPOTIFY_CLIENT_ID;
  const redirectUri = import.meta.env.VITE_URI;
  const authEndpoint = import.meta.env.VITE_AUTH_ENDPOINT;
  const responseType = "token";
  const [token, setToken] = useState("");
  const [albums, setAlbums] = useState<IAlbums[]>([]);

  const getAlbums = async () => {
    try {
      const response = await axios.get(
        "https://api.spotify.com/v1/artists/0TnOYISbd1XYRBk9myaseg/albums",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log(response.data);
      setAlbums(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    const hash = window.location.hash;

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    let token: any = window.localStorage.getItem("token");

    if (!token && hash) {
      token = hash
        .substring(1)
        .split("&")
        .find((e) => e.startsWith("access_token"))
        ?.split("=")[1];
      window.location.hash = "";
      window.localStorage.setItem("token", token);
    }
    setToken(token);
    getAlbums();
  }, []);

  const logout = () => {
    setToken("");
    window.localStorage.removeItem("token");
  };
  return (
    <>
      <div className="flex justify-between items-center z-10 sticky top-0 bg-black py-6">
        <div className="flex gap-2">
          {chevronData.map((item, index) => (
            <Icon
              key={index}
              className=" rounded-full bg-blackIcon"
              name={item.name}
              size={28}
              color={"gray"}
            />
          ))}
        </div>
        <div className="space-x-6">
          {!token ? (
            <>
              <Button className="text-gray" content="S'inscrire" />
              <Link
                content="Se connecter"
                to={`${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&response_type=${responseType}`}
                className="text-black bg-white py-3 px-5 rounded-full"
              />{" "}
            </>
          ) : (
            <Button onclick={logout} content="Se déconnecter" />
          )}
        </div>
      </div>
    </>
  );
}
