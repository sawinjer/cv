import React, {CSSProperties, useRef} from "react";
import {useTranslation} from "react-i18next";
import './WelcomeScreen.styles.sass';
import {CallToScrollLabel} from "@/components/CallToScrollLabel/CallToScrollLabel.tsx";
import {
    motion,
    useScroll,
    useTransform,
} from "framer-motion"

export const WelcomeScreen: React.FC = () => {
    const {t} = useTranslation();

    const ref = useRef(null);
    const {scrollYProgress} = useScroll({
        target: ref
    });

    const headerOpacity = useTransform(
        scrollYProgress,
        [0.5, 0],
        [1, 0]
    );
    const letterSpacing = useTransform(
        headerOpacity,
        [1, 0],
        [1, 3]
    )

    return (
        <motion.section className="welcome-section"
                        style={{
                            '--header-opacity': headerOpacity,
                            '--letter-spacing': letterSpacing,
                        } as unknown as CSSProperties}
        >
            <div ref={ref}>
                <h1 className="welcome-section__header">
                    {t`welcome.hello`}
                </h1>
                <h1 className="welcome-section__header short">
                    {t`welcome.hi`}
                </h1>
            </div>

            <CallToScrollLabel/>
        </motion.section>
    )
}