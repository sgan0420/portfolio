type ConnectionHints = {
  saveData?: boolean;
  effectiveType?: string;
};

type NavigatorHints = Navigator & {
  deviceMemory?: number;
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

// These are conservative browser hints, not a hardware benchmark. Visitors can
// still use the existing play controls to opt into decorative motion.
export function shouldLimitEffects(): boolean {
  if (typeof navigator === "undefined") return false;
  const { hardwareConcurrency, deviceMemory } = navigator as NavigatorHints;
  return (
    isConstrainedConnection() ||
    (hardwareConcurrency > 0 && hardwareConcurrency <= 4) ||
    (deviceMemory !== undefined && deviceMemory <= 4)
  );
}
