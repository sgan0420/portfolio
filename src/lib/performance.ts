type ConnectionHints = {
  saveData?: boolean;
  effectiveType?: string;
};

type NavigatorHints = Navigator & {
  connection?: ConnectionHints;
};

export function isConstrainedConnection(): boolean {
  if (typeof navigator === "undefined") return false;
  const { connection } = navigator as NavigatorHints;
  return Boolean(
    connection?.saveData ||
      ["slow-2g", "2g", "3g"].includes(connection?.effectiveType ?? "")
  );
}
