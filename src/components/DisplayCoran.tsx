import Coran from "../interfaces/Coran";

type DisplayCoranProps = {
  radio: Coran;
  index: number;
};

export default function DisplayCoran({ radio, index }: DisplayCoranProps) {
  return (
    <div className="m-2 ">
      <div className="max-w-md">
        <img className="w-32" src="/sheikh.png" alt="" />
        <audio className="mt-2" key={index} src={radio.url} controls></audio>
      </div>
    </div>
  );
}
