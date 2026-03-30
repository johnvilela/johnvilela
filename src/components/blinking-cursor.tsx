export function BlinkingCursor() {
  return (
    <span
      className="inline-block text-amber-bright"
      style={{ animation: "blink 1s step-end infinite" }}
    >
      &#9608;
    </span>
  );
}
