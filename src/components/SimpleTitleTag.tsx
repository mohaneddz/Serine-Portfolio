export default function SimpleTitleTag({ text, className }: { text: string, className?: string }) {
    return (
        <div className={`bg-primary-dim px-4 py-4 rounded-xl text-5xl text-white ${className}`}>
            {text}
        </div>
    );
};
