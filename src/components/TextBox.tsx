interface TextBoxProps {
    text: string;
    className?: string;
    style?: React.CSSProperties;
}

export default function TextBox({ text, className, style }: TextBoxProps) {
  return (
    <div className={`bg-primary-light shadow-black/40 shadow-lg py-8 text-3xl px-4 w-[40ch] break-words ${className}`} style={style}>
      {text}
    </div>
  );
}
