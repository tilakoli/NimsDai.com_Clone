import { motion } from "framer-motion";
import { useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

const LogoAnimation = () => {
  const [ref, inView] = useInView({
    threshold: 0.3,
    // triggerOnce: true,
  });
  // STEP:2
  const animation = useAnimation();
  //STEP:3
  // useEffect hook to animate the element when it is in viewport
  useEffect(() => {
    if (inView) {
      console.log(inView, "element in view");
      animation.start({
        pathLength: 1,
        transition: { duration: 3, ease: "easeInOut" },
      });
    }
    if (!inView) {
      console.log(inView, "not in view");
      animation.start({
        pathLength: 0,
      });
    }
  }, [inView]);

  return (
    <>
      <div className="w-auto h-52 sm:h-80">
        <svg
          version="1.0"
          xmlns="http://www.w3.org/2000/svg"
          width="100%"
          height="100%"
          ref={ref}
          viewBox="0 0 475.000000 525.000000"
          preserveAspectRatio="xMidYMid meet"
        >
          <g
            transform="translate(0.000000,525.000000) scale(0.100000,-0.100000)"
            fill="none"
            stroke="#CFB274"
          >
            <motion.path
              fill="none"
              strokeWidth="50"
              stroke="#CFB274"
              strokeLinecap="square"
              animate={animation}
              d="M2380 4546 l0 -236 158 0 157 1 -31 27 c-17 15 -67 59 -112 99 l-81
72 109 3 109 3 -136 120 c-75 66 -145 126 -155 133 -17 13 -18 4 -18 -222z"
            />
            <motion.path
              fill="none"
              strokeWidth="50"
              stroke="#CFB274"
              strokeLinecap="square"
              animate={animation}
              d="M1480 3320 l0 -882 78 65 77 65 3 637 c1 395 6 635 12 633 5 -2 120
-100 255 -218 136 -118 267 -232 292 -252 24 -21 95 -82 156 -136 62 -55 151
-132 198 -173 48 -41 205 -177 350 -304 144 -126 283 -247 308 -269 l46 -38 3
435 c1 240 1 634 0 876 l-3 440 -78 -72 -78 -72 -2 -628 -2 -627 -65 56 c-124
108 -264 229 -349 305 -47 41 -122 106 -167 145 -44 38 -217 188 -384 334
-167 146 -340 297 -385 335 -46 39 -116 99 -156 135 -41 36 -82 72 -91 79 -17
13 -18 -30 -18 -869z"
            />
            <motion.path
              fill="none"
              strokeWidth="50"
              stroke="#CFB274"
              strokeLinecap="square"
              animate={animation}
              d="M2210 4063 c-85 -75 -156 -139 -158 -142 -1 -4 24 -29 56 -58 l58
-51 104 88 103 89 69 -60 c149 -128 355 -307 427 -372 l76 -67 3 101 c3 121
18 98 -178 267 -74 65 -193 168 -263 230 -71 61 -132 112 -135 112 -4 -1 -77
-62 -162 -137z"
            />
            <motion.path
              fill="none"
              strokeWidth="50"
              stroke="#CFB274"
              strokeLinecap="square"
              animate={animation}
              d="M1800 3405 l0 -110 127 -110 c138 -120 389 -340 613 -535 79 -69 180
-156 225 -195 45 -38 118 -101 161 -140 44 -38 97 -85 118 -103 l37 -33 -27
-47 c-35 -61 -148 -172 -225 -222 -90 -58 -242 -133 -352 -174 l-99 -37 -81
27 c-110 36 -348 158 -423 216 -85 66 -168 158 -198 221 -16 34 -28 84 -33
130 l-8 76 -74 -67 c-72 -66 -74 -69 -67 -104 4 -21 25 -74 48 -120 75 -149
258 -305 486 -415 119 -57 308 -125 347 -125 43 0 234 71 356 132 203 102 356
223 438 346 41 61 91 178 91 214 0 4 -60 60 -132 123 -451 393 -655 570 -742
646 -54 47 -156 136 -225 196 -69 61 -157 137 -196 169 -38 33 -91 80 -117
105 l-48 45 0 -109z"
            />
          </g>
        </svg>
      </div>
    </>
  );
};

export default LogoAnimation;
