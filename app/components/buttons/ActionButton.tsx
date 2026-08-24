"use client";

type ActionButtonProps = {
  label: string;
  onClick?: () => void;
  variant?: "black" | "white";
};

export function ActionButton({
  label,
  onClick,
  variant = "black",
}: ActionButtonProps) {
  const baseBtnStyle =
    "px-6 min-h-11 min-w-11 text-xs uppercase tracking-[0.1em]";
  const variantStyles =
    variant === "black"
      ? "bg-black text-cream"
      : "bg-white text-black border border-black";

  return (
    <button
      onClick={onClick}
      className={`${baseBtnStyle} ${variantStyles} cursor-pointer`}
    >
      {label}
    </button>
  );
}
