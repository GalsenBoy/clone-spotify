import Coran from "../interfaces/Coran";

type DisplayCoranProps = {
  radio: Coran;
  index: number;
};

export default function DisplayCoran({ radio, index }: DisplayCoranProps) {
  return (
    <div className="mt-12">
      <img className="w-64" src="/sheikh.png" alt="" />
      <audio className="mt-2 w-64" key={index} src={radio.url} controls></audio>
    </div>
  );
}
