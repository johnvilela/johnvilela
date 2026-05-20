import { TerminalBox } from "@/components/terminal-box";

export default function Home() {
  return (
    <div className="flex flex-col gap-6">
      <div className="border border-amber-dim p-4 sm:p-6 flex flex-col items-center gap-2 overflow-hidden">
        <pre className="text-amber-bright text-glow-strong leading-[1.1] text-[0.45rem] sm:text-[0.65rem] md:text-sm">
          {`     ██╗ ██████╗ ██╗  ██╗███╗   ██╗
     ██║██╔═══██╗██║  ██║████╗  ██║
     ██║██║   ██║███████║██╔██╗ ██║
██   ██║██║   ██║██╔══██║██║╚██╗██║
╚█████╔╝╚██████╔╝██║  ██║██║ ╚████║
 ╚════╝  ╚═════╝ ╚═╝  ╚═╝╚═╝  ╚═══╝`}
        </pre>
        <pre className="text-amber-bright text-glow-strong leading-[1.1] text-[0.35rem] sm:text-[0.55rem] md:text-[0.7rem]">
          {`██╗   ██╗██╗██╗     ███████╗██╗      █████╗
██║   ██║██║██║     ██╔════╝██║     ██╔══██╗
╚██╗ ██╔╝██║██║     █████╗  ██║     ███████║
 ╚████╔╝ ██║██║     ██╔══╝  ██║     ██╔══██║
  ╚██╔╝  ██║███████╗███████╗███████╗██║  ██║
   ╚═╝   ╚═╝╚══════╝╚══════╝╚══════╝╚═╝  ╚═╝`}
        </pre>
        <p className="text-amber-dim text-glow text-sm sm:text-base mt-1">
          Software Engineer
        </p>
      </div>

      <TerminalBox title="ABOUT">
        <p className="text-amber">
          Started young, fell in love with tech, never looked back. 12+ years
          later I am still chasing the same thing: using technology to optimize
          real-life flows &mdash; internal platforms, automation,
          business-critical tools.
        </p>
        <br />
        <p className="text-amber-dim">
          Currently building on Embraer&apos;s enterprise e-commerce platform at
          GSW Software. Stack lives mostly around React, Node, Next.js,
          PostgreSQL, and MongoDB. Lately falling in love with AI all over again
          &mdash; without ever letting go of the code foundations.
        </p>
      </TerminalBox>

      <TerminalBox title="LINKS">
        <div className="flex flex-wrap gap-4">
          <SocialLink
            label="LINKEDIN"
            href="https://linkedin.com/in/johnvilela77"
          />
          <SocialLink label="GITHUB" href="https://github.com/johnvilela77" />
          <SocialLink label="EMAIL" href="mailto:johnvvilela@gmail.com" />
          <SocialLink label="DOWNLOAD CV" href="/cv.pdf" download />
        </div>
      </TerminalBox>
    </div>
  );
}

function SocialLink({
  label,
  href,
  download,
}: {
  label: string;
  href: string;
  download?: boolean;
}) {
  return (
    <a
      href={href}
      target={download ? undefined : "_blank"}
      rel={download ? undefined : "noopener noreferrer"}
      download={download || undefined}
      className="border border-amber-dim px-3 py-1 hover:bg-amber hover:text-terminal-bg transition-colors text-amber-bright text-glow"
    >
      &gt; {label}
    </a>
  );
}
