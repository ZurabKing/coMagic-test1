import { useState, MouseEvent, FC } from "react";
import { Button, ButtonProps } from "../../ui/Button";
import { NEXT_COLOR_MAP } from "./constants";
import { Color } from "./types";

export type ButtonColorProps = ButtonProps & {
  defaultColor?: Color;
};

export const ButtonColor: FC = ({
  defaultColor = "red",
  onClick: onClickProp,
  ...props
}: ButtonColorProps) => {
  const [color, setColor] = useState<Color>(defaultColor);

  const onClick = (e: MouseEvent<HTMLButtonElement>) => {
    const nextColor = NEXT_COLOR_MAP[color];
    setColor(nextColor);

    onClickProp?.(e);
  };

  return (
    <Button {...props} onClick={onClick} style={{ backgroundColor: color }} />
  );
};
