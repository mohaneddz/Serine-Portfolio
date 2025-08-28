export default function SimpleTitleTag({ text, className, style }: { text: string, className?: string, style?: React.CSSProperties }) {
    return (
        <div className={`bg-primary-dim px-4 py-4 rounded-xl text-5xl text-white ${className}`} style={style}>
            {text}
        </div>
    );
};
