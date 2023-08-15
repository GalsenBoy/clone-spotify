import Coran from "../interfaces/Coran";

type DisplayCoranProps = {
  radio: Coran;
  index: number;
};

export default function DisplayCoran({ radio, index }: DisplayCoranProps) {
  return <audio key={index} src={radio.url} controls></audio>;
}
