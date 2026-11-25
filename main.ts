// Tell a Whole Story in 32 Characters — a Wi-Fi network name.
// The story: he left, but the Wi-Fi outlasted him.
import { writeFileSync, mkdirSync } from "node:fs";

// He left. The network stayed — the whole breakup in 28 characters.
const entry = "He Left. The WiFi Stayed On.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry);
