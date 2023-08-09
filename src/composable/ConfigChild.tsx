import Link from "./Links";
type ConfigChildProps = {
  content: string;
  to: string;
  secondTo: string;
  secondContent: string;
};

export default function ConfigChild({
  content,
  to,
  secondContent,
  secondTo,
}: ConfigChildProps) {
  return (
    <div className="text-xs flex gap-4 mt-4">
      <Link content={content} to={to} />
      <Link content={secondContent} to={secondTo} />
    </div>
  );
}
