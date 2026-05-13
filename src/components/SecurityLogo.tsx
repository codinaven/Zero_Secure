export default function SecurityLogo() {
  return (
    <div className="inline-flex cursor-pointer group">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 64 64"
        fill="none"
        className="
          w-20 h-20
          transition-all duration-500
          group-hover:scale-110
          group-hover:drop-shadow-[0_0_10px_#38BDF8]
        "
      >
        {/* Rotating Zero Trust Ring */}
        <circle
          cx="32"
          cy="32"
          r="20"
          stroke="#38BDF8"
          strokeWidth="1.5"
          strokeDasharray="3 3"
          opacity="0.7"
          className="
            origin-center
            transition-transform duration-1000
            group-hover:animate-spin
          "
        />

        {/* Cloud */}
        <path
          d="M20 42H46C53 42 58 37 58 30C58 23.5 53.2 18.2 46.8 17.3C44.8 10.7 38.8 6 31.5 6C22.8 6 15.7 12.6 14.9 21.1C8.5 22.8 4 28.1 4 34.5C4 38.9 5.9 42 20 42Z"
          fill="#0F172A"
          stroke="#38BDF8"
          strokeWidth="2.5"
          className="
            transition-all duration-500
            group-hover:stroke-cyan-300
          "
        />

        {/* Shield */}
        <path
          d="M32 20L42 24V32C42 39 37.5 44 32 46C26.5 44 22 39 22 32V24L32 20Z"
          fill="#0EA5E9"
          stroke="#7DD3FC"
          strokeWidth="2"
          strokeLinejoin="round"
          className="
            transition-all duration-500
            group-hover:opacity-80
          "
        />

        {/* Lock */}
        <rect x="28" y="30" width="8" height="6" rx="1.5" fill="white" />

        <path
          d="M29.5 30V28.5C29.5 27.1 30.6 26 32 26C33.4 26 34.5 27.1 34.5 28.5V30"
          stroke="white"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
}
