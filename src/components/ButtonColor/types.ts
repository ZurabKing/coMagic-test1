import { CSSProperties } from "react";

export type Color = Extract<CSSProperties["color"], "red" | "blue" | "green">;
