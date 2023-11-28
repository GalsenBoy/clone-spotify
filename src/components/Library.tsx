import Discover from "../composable/Discover";
import Icon from "../composable/Icon";
import { libraryData } from "../data/data";

export default function Library() {
  return (
    <section className=" bg-black ">
      <div className="flex justify-between p-5">
        <div className="flex gap-2">
          <Icon name="Library" color="gray" size={24} />
          <span className="text-gray">Bibliothèque</span>
        </div>
        <div>
          <Icon name="Plus" color="gray" size={24} />
        </div>
      </div>
      <div className="h-49 overflow-auto mt-3 3xl:h-auto px-2 text-white">
        {libraryData.map((item, index) => (
          <Discover
            key={index}
            title={item.title}
            subtitle={item.subtitle}
            buttonContent={item.buttonContent}
            className={item.className}
          />
        ))}
      </div>
    </section>
  );
}
