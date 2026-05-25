export function ArchitectureDiagram() {
  return (
    <figure aria-label="QAIT ecosystem architecture diagram" className="w-full">
      <svg
        viewBox="0 0 480 320"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-auto"
        role="img"
        aria-describedby="arch-desc"
      >
        <desc id="arch-desc">
          Three-layer architecture: Devices and AI Agents at the bottom connect to SEALCOIN
          Infrastructure in the middle, which connects to the QAIT Governance Layer at the top.
        </desc>

        {/* Layer 1 — Devices / AI Agents */}
        <rect x="40" y="240" width="400" height="56" rx="2" fill="#F5F5F5" stroke="#E5E5E5" strokeWidth="1" />
        <text x="240" y="264" textAnchor="middle" className="text-xs" fill="#333333" fontSize="11" fontFamily="inherit">
          DEVICES / AI AGENTS
        </text>
        <text x="240" y="282" textAnchor="middle" fill="#999999" fontSize="10" fontFamily="inherit">
          IoT sensors · autonomous agents · connected hardware
        </text>

        {/* Arrow up */}
        <line x1="240" y1="238" x2="240" y2="200" stroke="#E5E5E5" strokeWidth="1.5" />
        <polygon points="234,202 240,190 246,202" fill="#E5E5E5" />
        <line x1="240" y1="190" x2="240" y2="172" stroke="#E5E5E5" strokeWidth="1.5" />

        {/* Layer 2 — SEALCOIN */}
        <rect x="40" y="120" width="400" height="56" rx="2" fill="#F5F5F5" stroke="#E5E5E5" strokeWidth="1" />
        <text x="240" y="144" textAnchor="middle" fill="#000000" fontSize="11" fontWeight="500" fontFamily="inherit">
          SEALCOIN INFRASTRUCTURE
        </text>
        <text x="240" y="162" textAnchor="middle" fill="#999999" fontSize="10" fontFamily="inherit">
          Protocol layer · device identity · transaction settlement
        </text>

        {/* Arrow up */}
        <line x1="240" y1="118" x2="240" y2="80" stroke="#E5E5E5" strokeWidth="1.5" />
        <polygon points="234,82 240,70 246,82" fill="#E5E5E5" />
        <line x1="240" y1="70" x2="240" y2="52" stroke="#E5E5E5" strokeWidth="1.5" />

        {/* Layer 3 — QAIT */}
        <rect x="40" y="4" width="400" height="56" rx="2" fill="#000000" />
        <text x="240" y="28" textAnchor="middle" fill="#FFFFFF" fontSize="11" fontWeight="500" fontFamily="inherit">
          QAIT GOVERNANCE LAYER
        </text>
        <text x="240" y="46" textAnchor="middle" fill="#999999" fontSize="10" fontFamily="inherit">
          Token governance · compliance · economic framework
        </text>

        {/* QAIT red accent */}
        <rect x="40" y="4" width="4" height="56" fill="#E30613" />
      </svg>

      <figcaption className="mt-3 text-xs text-wk-n500 text-center">
        QAIT governs the economic and compliance layer above SEALCOIN infrastructure.
      </figcaption>
    </figure>
  )
}
