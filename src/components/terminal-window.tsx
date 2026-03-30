import { Navigation } from "./navigation";

interface TerminalWindowProps {
  children: React.ReactNode;
}

export function TerminalWindow({ children }: TerminalWindowProps) {
  return (
    <div className="min-h-screen flex flex-col items-center px-2 sm:px-4 py-4 sm:py-8">
      <div
        className="w-full max-w-5xl border border-amber-dim flex flex-col"
        style={{ animation: "flicker 4s infinite" }}
      >
        <div className="flex items-center gap-2 px-4 py-2 border-b border-amber-dim bg-terminal-bg-light">
          <span className="text-amber-dim text-sm">&#9632;&#9632;&#9632;</span>
          <span className="text-amber-bright text-glow flex-1 text-center text-sm sm:text-base">
            v1.0 &mdash; jv77.exe
          </span>
          <span className="text-amber-dim text-sm">&#9472;&#9633;&#215;</span>
        </div>

        <Navigation />

        <main className="flex-1 p-4 sm:p-6">{children}</main>

        <div className="px-4 py-2 border-t border-amber-dim text-amber-dim text-sm">
          <span>C:\USERS\JV77&gt;</span>{" "}
        </div>
      </div>
    </div>
  );
}
