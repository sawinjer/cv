import React, { useCallback, useRef } from 'react';
import {
  useAnimationFrame,
  useMotionValue,
  useScroll,
  useSpring,
  useTransform,
  useVelocity,
  wrap,
} from 'framer-motion';
import { motion } from 'framer-motion';
import './RunningText.styles.sass';

type Props = React.PropsWithChildren<{
  velocity?: number;
}>;

export const RunningText = React.forwardRef<HTMLDivElement, Props>(({ velocity = 5, children }, forwardRef) => {
  const ref = useRef<HTMLHeadingElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
  });
  const baseX = useMotionValue(0);
  const scrollVelocity = useVelocity(scrollYProgress);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400,
  });
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
    clamp: false,
  });
  const x = useTransform(baseX, (v) => `${wrap(-60, 60, v)}%`);

  useAnimationFrame((_, delta) => {
    let moveBy = velocity * (delta / 1000);

    moveBy += moveBy * velocityFactor.get();

    baseX.set(baseX.get() + moveBy);
  });

  const handleRefAssign = useCallback(
    (element: HTMLDivElement | null) => {
      ref.current = element;

      if (!forwardRef) {
        return;
      }

      if (typeof forwardRef === 'function') {
        forwardRef(element);
      } else {
        forwardRef.current = element;
      }
    },
    [forwardRef]
  );

  return (
    <div className="parallax">
      <motion.div ref={handleRefAssign} className="scroller" style={{ x }}>
        <span>{children}</span>
        <span>{children}</span>
        <span>{children}</span>
        <span>{children}</span>
      </motion.div>
    </div>
  );
});
