type ButtonProps = {
  content: string;
  color: string;
  bgColor: string;
};

export default function Button({ content, color, bgColor }: ButtonProps) {
  return (
    <button
      className={`border rounded-full py-1 px-5 text-${color} bg-${bgColor}-500`}
    >
      {content}
    </button>
  );
}
