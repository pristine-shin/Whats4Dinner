import { motion } from "framer-motion";

export default function StickFigure() {
  return (
    <svg width="200" height="300" viewBox="0 0 200 300">
      {/* Head */}
      <circle
        cx="100"
        cy="50"
        r="30"
        stroke="black"
        strokeWidth="5"
        fill="transparent"
      />

      {/* Body */}
      <line x1="100" y1="80" x2="100" y2="180" stroke="black" strokeWidth="5" />

      {/* === LEFT ARM (Shoulder → Elbow → Hand) === */}
      <motion.g
        animate={{ rotate: [40, 0, 40] }}
        transition={{ repeat: Infinity, duration: 1 }}
        style={{ originX: 0, originY: 0 }}
        transform="translate(100,100)" // Shoulder
      >
        {/* Upper Arm (shoulder → elbow) */}
        <line x1="100" y1="80" x2="110" y2="120" stroke="black" strokeWidth="5" />

        {/* Forearm (elbow → hand), pivot at elbow */}
        <motion.g
          animate={{ rotate: "-40deg" }}
          //transition={{ repeat: Infinity, duration: 0.6, ease: "easeInOut" }}
          style={{ originX: 0, originY: 0 }}
          transform="translate(-30,40)" // Elbow position
        >
          <line x1="110" y1="120" x2="110" y2="180" stroke="black" strokeWidth="5" />
        </motion.g>
      </motion.g>

      {/* === RIGHT ARM (Shoulder → Elbow → Hand) === */}
      <motion.g
        animate={{ rotate: [-40, 0, -40] }}
        transition={{ repeat: Infinity, duration: 1, ease:"linear"}}
        style={{ originX: 0, originY: 0 }}
        transform="translate(100,100)" // Shoulder
      >
        {/* Upper Arm */}
        <line x1="100" y1="80" x2="110" y2="120" stroke="black" strokeWidth="5" />

        {/* Forearm */}
        <motion.g
          animate={{ rotate: "-40deg" }}
          //transition={{ repeat: Infinity, duration: 0.6, ease: "easeInOut" }}
          style={{ originX: 0, originY: 0 }}
          transform="translate(-30,40)" // Elbow
        >
          <line x1="110" y1="120" x2="110" y2="180" stroke="black" strokeWidth="5" />
        </motion.g>
      </motion.g>

      {/* === LEFT LEG (Hip → Knee → Foot) === */}
      <motion.g
        animate={{ rotate: [25, -25, 25] }} // thigh swing
        transition={{ repeat: Infinity, duration: 1, ease: "easeInOut" }}
        style={{ originX: 0, originY: 0 }}
        transform="translate(100,180)" // hip pivot
      >
        {/* Thigh */}
        <line x1="100" y1="180" x2="110" y2="210" stroke="black" strokeWidth="5" />

        {/* Shin */}
        <motion.g
          animate={{ rotate: [10, -15, 10] }} // bend at knee
          //transition={{ repeat: Infinity, duration: 1, ease: "easeInOut" }}
          style={{ originX: 0, originY: 0 }}
          transform="translate(-20,50)" // knee pivot
        >
          <line x1="110" y1="210" x2="100" y2="275" stroke="black" strokeWidth="5" />
        </motion.g>
      </motion.g>

      {/* === RIGHT LEG (Hip → Knee → Foot) === */}
      <motion.g
        animate={{ rotate: [-25, 25, -25] }} // opposite swing to left leg
        //transition={{ repeat: Infinity, duration: 1, ease: "easeInOut" }}
        style={{ originX: 0, originY: 0 }}
        transform="translate(100,180)" // hip pivot
      >
        {/* Thigh */}
        <line x1="100" y1="180" x2="110" y2="210" stroke="black" strokeWidth="5" />

        {/* Shin */}
        <motion.g
          animate={{ rotate: [-10, 15, -10] }} // bend at knee
          transition={{ repeat: Infinity, duration: 1, ease: "easeInOut" }}
          style={{ originX: 0, originY: 0 }}
          transform="translate(20,50)" // knee pivot
        >
          <line x1="110" y1="210" x2="100" y2="275" stroke="black" strokeWidth="5" />
        </motion.g>
      </motion.g>
    </svg>
  );
}
