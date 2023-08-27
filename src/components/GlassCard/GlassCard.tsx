import React from "react";
import './GlassCard.styles.sass';

type Props = React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>;
export const GlassCard = React.forwardRef<HTMLDivElement, Props>((props, ref) => {
    const {children, className, ...rest} = props;

    return (<div ref={ref} className={["glass-card", className || ''].join(' ')} {...rest}>{children}</div>)
})