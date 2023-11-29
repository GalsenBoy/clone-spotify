import Button from "../composable/Button";
import ConfigChild from "../composable/ConfigChild";
import Icon from "../composable/Icon";
import Link from "../composable/Links";
import { configData } from "../data/data";

export default function Confidential() {
  return (
    <div className="p-6 bg-black h-72 rounded-b-md flex flex-col justify-end">
      {configData.map((item, index) => (
        <ConfigChild
          key={index}
          content={item.content}
          to={item.to}
          secondContent={item.secondContent}
          secondTo={item.secondTo}
        />
      ))}
      <div className="mt-4 text-xs">
        <Link className="text-gray" content="cookies" to="/co" />
      </div>
      <div className="flex border w-fit space-x-1 mt-5 font-bold rounded-full border-gray px-3 py-1">
        <Icon name="Globe" color="white" size={20} />
        <Button content="Français" className="text-sm" />
      </div>
    </div>
  );
}
