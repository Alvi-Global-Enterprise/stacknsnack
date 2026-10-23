export function Chip({ className = "", color = "#FFD43B" }: { className?: string; color?: string }) {
  return (
    <svg viewBox="0 0 64 40" className={className} fill="none" aria-hidden>
      <ellipse cx="32" cy="20" rx="28" ry="14" fill={color} stroke="#E8A800" strokeWidth="2" />
      <path
        d="M12 20c4-6 8-8 12-4s8 2 12-2 8-2 12 2"
        stroke="#E8A800"
        strokeWidth="2"
        strokeLinecap="round"
        opacity="0.7"
      />
      <path
        d="M14 24c5-4 9-3 12 1s7 1 11-2 8 0 12 3"
        stroke="#E8A800"
        strokeWidth="1.5"
        strokeLinecap="round"
        opacity="0.5"
      />
    </svg>
  );
}

export function ChipBag({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 120 160" className={className} fill="none" aria-hidden>
      <rect x="18" y="8" width="84" height="144" rx="18" fill="#6F1DCE" />
      <rect x="26" y="20" width="68" height="48" rx="12" fill="#FFD43B" />
      <circle cx="60" cy="44" r="16" fill="#FF66C4" />
      <path d="M52 44h16M60 36v16" stroke="#fff" strokeWidth="3" strokeLinecap="round" />
      <text x="60" y="95" textAnchor="middle" fill="#FFD43B" fontSize="11" fontWeight="800" fontFamily="system-ui">
        CLASSIC
      </text>
      <text x="60" y="110" textAnchor="middle" fill="#fff" fontSize="9" fontWeight="700" fontFamily="system-ui">
        RIDGED
      </text>
      <ellipse cx="48" cy="130" rx="10" ry="5" fill="#FFD43B" opacity="0.9" />
      <ellipse cx="72" cy="135" rx="9" ry="4.5" fill="#FFBF00" opacity="0.85" />
    </svg>
  );
}

export function SpicyBag({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 120 160" className={className} fill="none" aria-hidden>
      <rect x="18" y="8" width="84" height="144" rx="18" fill="#E63946" />
      <rect x="26" y="20" width="68" height="48" rx="12" fill="#FF9F43" />
      <path d="M60 28c-8 8-10 16-2 24 8-8 14-4 10-16-6 2-8 6-8-8z" fill="#E63946" />
      <text x="60" y="95" textAnchor="middle" fill="#FFD43B" fontSize="11" fontWeight="800" fontFamily="system-ui">
        SPICY
      </text>
      <text x="60" y="110" textAnchor="middle" fill="#fff" fontSize="9" fontWeight="700" fontFamily="system-ui">
        CRUNCH
      </text>
      <ellipse cx="48" cy="130" rx="10" ry="5" fill="#FF9F43" opacity="0.9" />
      <ellipse cx="72" cy="135" rx="9" ry="4.5" fill="#FFD43B" opacity="0.85" />
    </svg>
  );
}

export function JuiceBox({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 140" className={className} fill="none" aria-hidden>
      <rect x="18" y="28" width="64" height="96" rx="8" fill="#FF9F43" />
      <rect x="18" y="28" width="64" height="28" rx="8" fill="#E87A20" />
      <rect x="18" y="48" width="64" height="8" fill="#E87A20" />
      <circle cx="50" cy="78" r="18" fill="#FFF7D6" />
      <path d="M42 82c4-10 12-12 16-2" stroke="#E87A20" strokeWidth="3" strokeLinecap="round" fill="none" />
      <rect x="46" y="12" width="8" height="20" rx="2" fill="#6F1DCE" />
      <ellipse cx="50" cy="12" rx="6" ry="4" fill="#FF66C4" />
      <text x="50" y="112" textAnchor="middle" fill="#fff" fontSize="10" fontWeight="800" fontFamily="system-ui">
        APPLE
      </text>
    </svg>
  );
}

export function ColaBottle({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 80 160" className={className} fill="none" aria-hidden>
      <rect x="28" y="8" width="24" height="18" rx="4" fill="#2D1148" />
      <path d="M24 26h32l6 20H18l6-20z" fill="#6F1DCE" />
      <path
        d="M18 46c0 0 2 8 2 20v60c0 10 8 18 20 18s20-8 20-18V66c0-12 2-20 2-20H18z"
        fill="#4B0EA8"
      />
      <path d="M22 70h36v40H22z" fill="#FFD43B" opacity="0.95" />
      <text x="40" y="95" textAnchor="middle" fill="#4B0EA8" fontSize="10" fontWeight="800" fontFamily="system-ui">
        COLA
      </text>
      <ellipse cx="40" cy="130" rx="8" ry="4" fill="#FF66C4" opacity="0.6" />
    </svg>
  );
}

export function ComboBox({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 160 140" className={className} fill="none" aria-hidden>
      <path d="M20 50l60-28 60 28v60l-60 28-60-28V50z" fill="#C4A574" />
      <path d="M20 50l60 28 60-28-60-28-60 28z" fill="#E8C99A" />
      <path d="M80 78v60l60-28V50L80 78z" fill="#A8885A" />
      <rect x="48" y="20" width="28" height="40" rx="6" fill="#6F1DCE" transform="rotate(-12 62 40)" />
      <rect x="78" y="14" width="28" height="40" rx="6" fill="#E63946" transform="rotate(8 92 34)" />
      <rect x="55" y="42" width="22" height="30" rx="4" fill="#FF9F43" />
      <ellipse cx="100" cy="55" rx="14" ry="7" fill="#FFD43B" />
      <ellipse cx="45" cy="58" rx="12" ry="6" fill="#FFBF00" />
      <circle cx="80" cy="48" r="8" fill="#FF66C4" />
    </svg>
  );
}

export function MascotScene({ className = "" }: { className?: string }) {
  return (
    <div className={`relative ${className}`}>
      <svg viewBox="0 0 420 440" className="w-full h-auto" role="img" aria-label="Brianna with snacks">
        {/* glow */}
        <ellipse cx="210" cy="380" rx="140" ry="28" fill="#4B0EA8" opacity="0.35" />

        {/* body / dress */}
        <ellipse cx="210" cy="320" rx="70" ry="90" fill="#FF66C4" />
        <ellipse cx="210" cy="300" rx="55" ry="70" fill="#FF8AD4" />

        {/* arms */}
        <ellipse cx="130" cy="280" rx="28" ry="50" fill="#F5C6A0" transform="rotate(-25 130 280)" />
        <ellipse cx="290" cy="270" rx="28" ry="50" fill="#F5C6A0" transform="rotate(30 290 270)" />

        {/* snack bag in hand */}
        <rect x="95" y="240" width="55" height="70" rx="12" fill="#6F1DCE" transform="rotate(-15 122 275)" />
        <rect x="102" y="248" width="40" height="22" rx="6" fill="#FFD43B" transform="rotate(-15 122 259)" />
        <circle cx="122" cy="258" r="8" fill="#FF66C4" transform="rotate(-15 122 258)" />

        {/* chip in other hand */}
        <ellipse cx="310" cy="250" rx="28" ry="14" fill="#FFD43B" transform="rotate(20 310 250)" />
        <path d="M295 248c8-6 16-4 22 2" stroke="#E8A800" strokeWidth="2" fill="none" />

        {/* head */}
        <circle cx="210" cy="160" r="72" fill="#F5C6A0" />

        {/* hair */}
        <path
          d="M140 150c0-70 40-100 70-100s70 30 70 100c-20-30-40-35-70-35s-50 5-70 35z"
          fill="#5C3A1E"
        />
        <ellipse cx="155" cy="175" rx="22" ry="35" fill="#5C3A1E" />
        <ellipse cx="265" cy="175" rx="22" ry="35" fill="#5C3A1E" />
        <path d="M175 95c20-8 50-8 70 0" stroke="#3D2614" strokeWidth="4" fill="none" opacity="0.3" />

        {/* bow */}
        <circle cx="255" cy="105" r="14" fill="#FF66C4" />
        <circle cx="275" cy="105" r="14" fill="#FF66C4" />
        <circle cx="265" cy="108" r="8" fill="#FFD43B" />

        {/* face */}
        <ellipse cx="185" cy="155" rx="8" ry="10" fill="#2D1148" />
        <ellipse cx="235" cy="155" rx="8" ry="10" fill="#2D1148" />
        <circle cx="188" cy="152" r="3" fill="#fff" />
        <circle cx="238" cy="152" r="3" fill="#fff" />
        <ellipse cx="175" cy="175" rx="12" ry="6" fill="#FF8A9A" opacity="0.55" />
        <ellipse cx="245" cy="175" rx="12" ry="6" fill="#FF8A9A" opacity="0.55" />
        <path d="M190 195c12 14 28 14 40 0" stroke="#2D1148" strokeWidth="4" strokeLinecap="round" fill="none" />

        {/* juice + cola nearby */}
        <g transform="translate(20, 280)">
          <rect x="8" y="20" width="36" height="55" rx="5" fill="#FF9F43" />
          <rect x="8" y="20" width="36" height="16" fill="#E87A20" />
          <rect x="22" y="8" width="6" height="14" fill="#6F1DCE" />
        </g>
        <g transform="translate(350, 270)">
          <rect x="14" y="0" width="16" height="12" rx="3" fill="#2D1148" />
          <path d="M10 12h24l4 12H6l4-12z" fill="#6F1DCE" />
          <path d="M8 24h28v50c0 8-6 14-14 14s-14-6-14-14V24z" fill="#4B0EA8" />
          <rect x="12" y="36" width="20" height="18" fill="#FFD43B" />
        </g>
      </svg>

      {/* floating chips around mascot */}
      <Chip className="absolute top-8 left-4 w-14 animate-float-slow opacity-90" />
      <Chip className="absolute top-24 right-0 w-12 animate-float opacity-80" color="#FFBF00" />
      <Chip className="absolute bottom-28 left-0 w-10 animate-wiggle opacity-75" color="#FFE066" />
      <Chip className="absolute bottom-16 right-8 w-16 animate-float-slow opacity-85" />

      {/* doodles */}
      <span className="absolute top-12 right-16 text-2xl text-yellow animate-float" aria-hidden>
        ✦
      </span>
      <span className="absolute top-40 left-8 text-pink text-xl animate-float-slow" aria-hidden>
        ♥
      </span>
      <span className="absolute bottom-36 right-4 text-yellow text-lg animate-wiggle" aria-hidden>
        ★
      </span>
    </div>
  );
}

export function StarRow({ count = 5 }: { count?: number }) {
  return (
    <div className="flex gap-0.5 text-yellow-gold" aria-label={`${count} star rating`}>
      {Array.from({ length: count }).map((_, i) => (
        <span key={i} className="text-sm leading-none">
          ★
        </span>
      ))}
    </div>
  );
}
