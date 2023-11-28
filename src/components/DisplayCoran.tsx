import Coran from "../interfaces/Coran";

type DisplayCoranProps = {
  radio: Coran;
  index: number;
};

export default function DisplayCoran({ radio, index }: DisplayCoranProps) {
  return (
    <div className="mt-12">
      <div className="p-3 bg-gray-light rounded-lg">
        <img className="w-36 h-36 rounded-lg object-cover" src="/rappeur.jpg" alt="" />
        {/* <audio
          className="mt-2 w-36"
          key={index}
          src={radio.url}
          controls
        ></audio> */}
      </div>
    </div>
  );
}
