import './Errorpage.css';

import { useEffect, useRef } from 'react';
import lottie from 'lottie-web';
import animationData from './Animation - 1732529418292.json';

export default function FourHundredFourError() {
  const svgContainerRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (svgContainerRef.current) {
      const animItem = lottie.loadAnimation({
        container: svgContainerRef.current,
        renderer: 'svg',
        loop: true,
        autoplay: true,
        animationData: animationData,
      });
      return () => animItem.destroy();
    }
  }, []);

  return <div className='Sanimation' ref={svgContainerRef} style={{ width: '100%', height: '100%' }} />;
}
