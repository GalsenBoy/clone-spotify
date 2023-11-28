import Button from "../composable/Button";
import Icon from "../composable/Icon";
import Link from "../composable/Links";

export default function Confidential() {
  return (
    <section className="p-6 bg-black h-72 rounded-b-md flex flex-col justify-end">
      <div className="mt-4 text-xs">
        <Link className="text-gray" content="cookies" to="/co" />
      </div>
      <div className="flex border w-fit space-x-1 mt-5 font-bold rounded-full border-gray px-3 py-1">
        <Icon name="Globe" color="white" size={20} />
        <Button content="Français" className="text-sm" />
      </div>
    </section>
  );
}
