interface TextBoxProps {
    text: string;
    className?: string;
}

export default function TextBox({ text, className }: TextBoxProps) {
  return (
    <div className={`bg-primary-light shadow-black/40 shadow-lg py-8 text-3xl px-4 w-[40ch] break-words ${className}`}>
      {text}
    </div>
  );
}
