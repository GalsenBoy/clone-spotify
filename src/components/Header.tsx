import Button from "../composable/Button";
import Icon from "../composable/Icon";
export default function Header() {
  return (
    <header className="flex justify-between bg-black p-6 my-2 mr-2 rounded-md w-full">
      <div className="flex">
        <Icon name="ChevronLeft" size={24} color={"red"} />
        <Icon name="ChevronRight" size={24} color={"red"} />
      </div>
      <div className="space-x-2">
        <Button content="S'inscrire" />
        <Button
          content="Se connecter"
          className="text-black bg-white py-2 px-5 rounded-full"
        />
      </div>
    </header>
  );
}
