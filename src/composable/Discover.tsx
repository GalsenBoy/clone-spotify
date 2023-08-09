import Button from "./Button";

type DiscoverProps = {
  title: string;
  subtitle: string;
  buttonContent: string;
};

export default function Discover({
  title,
  subtitle,
  buttonContent,
}: DiscoverProps) {
  return (
    <div className="bg-gray p-2 pl-5 pb-4 rounded-md ">
      <p className="font-bold pt-2">{title}</p>
      <p className="text-xs font-bold pt-2 pb-2 ">{subtitle}</p>
      <Button
        className="text-black bg-white rounded-full px-4 py-1 mt-3"
        content={buttonContent}
      />
    </div>
  );
}
