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
          Welcome to my corner of the internet. I am a software engineer
          passionate about building elegant solutions to complex problems.
          With years of experience across the full stack, I specialize in
          crafting performant web applications and developer tools that
          make a difference.
        </p>
        <br />
        <p className="text-amber-dim">
          When I&apos;m not writing code, you can find me exploring new
          technologies, contributing to open source, or diving deep into
          system architecture. I believe in clean code, continuous
          learning, and the power of the terminal.
        </p>
      </TerminalBox>

      <TerminalBox title="LINKS">
        <div className="flex flex-wrap gap-4">
          <SocialLink
            label="LINKEDIN"
            href="https://linkedin.com/in/placeholder"
          />
          <SocialLink
            label="GITHUB"
            href="https://github.com/placeholder"
          />
          <SocialLink
            label="X"
            href="https://x.com/placeholder"
          />
          <SocialLink
            label="DOWNLOAD CV"
            href="/cv.pdf"
            download
          />
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
