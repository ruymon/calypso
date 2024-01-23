interface FlightPlanFieldProps {
  label: string;
  value: string;
  prefix?: string;
  as?: 'input' | 'textarea';
};

export function FlightPlanField({ label, value, prefix, as }: FlightPlanFieldProps) {
  const Component = as === 'textarea' ? FlightPlanTextarea : FlightPlanInput;

  return (
    <div className="flex flex-col gap-1.5 w-full">
      <FlightPlanLabel label={label} />
      <Component value={value} prefix={prefix} />
    </div>
  );
};

export function FlightPlanLabel({ label }: { label: string }) {
  return (
    <small className="text-xs leading-3 font-medium line-clamp-1 text-muted-foreground">
      {label}
    </small>
  );
};

export function FlightPlanInput({ value, prefix }: { value: string; prefix?: string }) {
  return (
    <div className="uppercase flex h-8 items-center w-full rounded-md bg-background/50 backdrop-blur-lg ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 cursor-not-allowed">
      { prefix && <span className="text-xs leading-3 font-semibold uppercase bg-primary text-primary-foreground px-1 min-w-[1.5rem] h-full rounded-l-sm flex items-center justify-center">{prefix}</span>}
      <span className="text-sm flex-1 line-clamp-1 px-2">{value}</span>
    </div>
  );
};

export function FlightPlanTextarea({ value, prefix }: { value: string; prefix?: string }) {
  return (
    <div className="uppercase flex flex-col min-h-[5rem] rounded-md bg-background/50 backdrop-blur-lg ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 cursor-not-allowed">
      { prefix && <span className="text-xs w-fit leading-3 font-semibold uppercase bg-primary text-secondary p-1 px-2  rounded-br-sm flex items-center justify-center">{prefix}</span>}
      <span className="text-sm p-2 font-mono">{value}</span>
    </div>
  );
};
