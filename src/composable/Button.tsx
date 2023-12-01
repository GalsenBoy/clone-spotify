type ButtonProps = {
  content: string;
  className?: string;
  onclick?: ()=> void
};

export default function Button({ content, className,onclick }: ButtonProps) {
  return <button onClick={onclick} className={className}>{content}</button>;
}
