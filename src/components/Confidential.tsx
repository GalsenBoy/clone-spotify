import ConfigChild from "../composable/ConfigChild";

export default function Confidential() {
  return (
    <section>
      <ConfigChild content="Légal" to="/legal" />
      <div></div>
      <div></div>
    </section>
  );
}
