interface HeadingProps {
  value: number;
  className?: string;
}

export function Heading({ value, className }: HeadingProps) {
  if (value > 360) {
    value = value % 360;
  }

  let parsedValue: string = String(value);

  while (parsedValue.length < 3) {
    parsedValue = `0${parsedValue}`;
  }

  return <span className={className}>{parsedValue}</span>;
}
