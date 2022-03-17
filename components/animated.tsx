import {useInView} from "react-intersection-observer";
import { PropsWithChildren } from 'react';

export const Animated = ({children, className, delay = 300}: PropsWithChildren<any>) => {
    // valid delay value: 75, 100, 150, 200, 300, 500, 700, 1000

    const { ref, inView } = useInView({
        /* Optional options */
        threshold: 0,
    });

    return (
        <div
            ref={ref}
            className={`transition-all duration-1000 delay-${delay} ${className} ${inView ? 'opacity-1': 'opacity-0'}`}
        >
            {children}
        </div>
    )

}
