import Button from "../composable/Button";
import Icon from "../composable/Icon";
import { chevronData } from "../data/data";

export default function TopHeader() {
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
          <Button className="text-gray" content="S'inscrire" />
          <Button
            content="Se connecter"
            className="text-black bg-white py-3 px-5 rounded-full"
          />
        </div>
      </div>
    </>
  );
}
