import { ComponentProps, FC } from "react";

type ButtonTagProps = ComponentProps<"button">;

export type ButtonProps = Omit<ButtonTagProps, "disabled"> & {
  isLoading?: boolean;
  isDisabled?: boolean;
};

export const Button: FC = ({
  children,
  isLoading,
  isDisabled,
  ...props
}: ButtonProps) => {
  return (
    <button {...props} disabled={isDisabled || isLoading}>
      {isLoading ? "Загрузка..." : children}
    </button>
  );
};
