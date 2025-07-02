import React from 'react';

const Progress = React.forwardRef(({ className, value, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={`relative w-full overflow-hidden rounded-full bg-neutral-200 ${className}`}
      {...props}
    >
      <div
        className="h-full bg-primary-green transition-all"
        style={{ width: `${value || 0}%` }}
      />
    </div>
  );
});
Progress.displayName = 'Progress';

export { Progress };
