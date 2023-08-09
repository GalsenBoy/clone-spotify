import Link from "./Links";
type ConfigChildProps = {
  content: string;
  to: string;
};

export default function ConfigChild({ content, to }: ConfigChildProps) {
  return (
    <div>
      <Link content={content} to={to} className="" />
    </div>
  );
}
