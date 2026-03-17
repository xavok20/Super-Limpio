import logoUrl from '/logo-super-limpio.png?url' // El ?url asegura que Vite lo trate como una ruta estática

interface LogoProps {
  className?: string;
  size?: number;
}

export function Logo({ className = "", size = 40 }: LogoProps) {
  return (
    <img 
      src={logoUrl} 
      alt="Super Limpio Logo" 
      width={size}
      height={size}
      className={`object-contain ${className}`}
    />
  );
}
