interface LogoProps {
  className?: string;
  size?: number;
}

export function Logo({ className = "", size = 40 }: LogoProps) {
  return (
    <img 
      src="/logo-super-limpio.png" 
      alt="Super Limpio Logo" 
      width={size}
      height={size}
      className={`object-contain ${className}`}
    />
  );
}
