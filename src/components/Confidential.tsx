import Button from "../composable/Button";
import ConfigChild from "../composable/ConfigChild";
import Icon from "../composable/Icon";
import Link from "../composable/Links";
import { configData } from "../data/data";
// import { Button, ConfigChild, Icon, Link } from "../composable";

export default function Confidential() {
  return (
    <section className="p-6 bg-black rounded-b-md ">
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
        <Link content="cookies" to="/co" />
      </div>
      <div className="flex border w-fit space-x-1 mt-5 font-bold rounded-full px-3 py-1">
        <Icon name="Globe" color="red" size={24} />
        <Button content="Français" />
      </div>
    </section>
  );
}
