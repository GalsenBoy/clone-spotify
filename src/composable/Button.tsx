type ButtonProps = {
  content: string;
  color?: string;
  back?: string;
  px: number;
  py: number;
};

export default function Button({ content, color, back, px, py }: ButtonProps) {
  return (
    <button
      className={`rounded-full text-${color} bg-${back} px-${px} py-${py} `}
    >
      {content}
    </button>
  );
}
