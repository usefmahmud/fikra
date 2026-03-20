import type { RegisterableHotkey } from "@tanstack/react-hotkeys";

export const HOTKEYS = {
  toggleSidebar: "Mod+B",
  x: '/'
} as const satisfies Record<string, RegisterableHotkey>;
