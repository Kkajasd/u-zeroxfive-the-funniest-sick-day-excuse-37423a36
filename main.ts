// The Funniest Sick-Day Excuse — u-zeroxfive-the-funniest-sick-day-excuse-37423a36
// Deterministic program/v1 entry: writes one fixed line to /output/entry.txt.
// No randomness, no clock, no network, no file reads outside this repo.
import { mkdirSync, writeFileSync } from "node:fs";

// Verified locally 2026-11-25: entry.txt is 139 chars / 141 bytes, one line,
// no trailing newline, byte-identical across two runs (sha256 87ad57c4…).
const LINE =
  "Can't come in today — my sleep tracker says I flatlined twice last night, so I'm staying home to make sure the third time isn't at my desk.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
