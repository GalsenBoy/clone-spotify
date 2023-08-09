import { NavLink } from "react-router-dom";

type LinkProps = {
  content: string;
  to: string;
  className: string;
};
export default function Link({ content, to, className }: LinkProps) {
  return (
    <>
      <NavLink className={className} to={to}>
        {content}
      </NavLink>
    </>
  );
}
