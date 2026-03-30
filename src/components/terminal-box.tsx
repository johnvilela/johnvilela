interface TerminalBoxProps {
  title?: string;
  children: React.ReactNode;
  className?: string;
}

export function TerminalBox({ title, children, className }: TerminalBoxProps) {
  return (
    <div className={`border border-amber-dim relative ${className ?? ""}`}>
      {title && (
        <div className="absolute -top-3 left-3 bg-terminal-bg px-2 text-amber-bright text-glow">
          {title}
        </div>
      )}
      <div className="px-4 py-4">{children}</div>
    </div>
  );
}
