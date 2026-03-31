export function Logo({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="logoGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#00D9FF" />
          <stop offset="100%" stopColor="#0099CC" />
        </linearGradient>
      </defs>
      <path
        d="M 10 55 C 20 35, 45 30, 75 40 C 80 42, 85 45, 90 50 C 85 48, 80 46, 75 45 C 50 38, 30 42, 15 58 Z"
        fill="url(#logoGrad)"
      />
    </svg>
  );
}
