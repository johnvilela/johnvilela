import type { Metadata } from "next";
import { TerminalBox } from "@/components/terminal-box";
import careerData from "@/data/career.json";
import type { CareerEntry } from "@/types";

export const metadata: Metadata = {
  title: "Career",
};

export default function CareerPage() {
  const entries = careerData as CareerEntry[];

  return (
    <div className="flex flex-col gap-6">
      <div className="text-glow">
        <span className="text-amber-dim">C:\CAREER&gt;</span>{" "}
        <span className="text-amber-bright">dir /timeline</span>
      </div>

      <p className="text-amber-dim text-sm">
        Displaying {entries.length} entries...
      </p>

      <div className="border-l-2 border-amber-dim ml-2 sm:ml-4 flex flex-col gap-6">
        {entries.map((entry, index) => (
          // biome-ignore lint/suspicious/noArrayIndexKey: Static data
          <div key={index} className="relative pl-4 sm:pl-6">
            <div className="absolute left-[-5px] top-3 w-2 h-2 bg-amber border border-amber-bright" />

            <TerminalBox title={entry.company}>
              <div className="flex flex-col gap-2">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-1">
                  <span className="text-amber-bright">{entry.role}</span>
                  <span className="text-amber-dim text-sm">
                    [{entry.startDate} → {entry.endDate}]
                  </span>
                </div>
                <p className="text-amber">{entry.description}</p>
              </div>
            </TerminalBox>
          </div>
        ))}
      </div>

      <div className="text-amber-dim text-sm text-glow">
        <span>--- END OF TIMELINE ---</span>
      </div>
    </div>
  );
}
