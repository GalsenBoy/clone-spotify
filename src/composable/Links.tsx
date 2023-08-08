import { NavLink } from "react-router-dom";

type LinkProps = {
  content: string;
  to: string;
  classLink: string;
};
export default function Link({ content, to, classLink }: LinkProps) {
  return (
    <>
      <NavLink className={classLink} to={to}>
        {content}
      </NavLink>
    </>
  );
}
