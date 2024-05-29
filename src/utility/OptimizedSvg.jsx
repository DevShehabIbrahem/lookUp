import React, { useEffect, useState } from 'react';
import axios from 'axios';
import optimizeSvg from '../lib/optimizeSvg';

const OptimizedSvg = ({ url }) => {
  const [svgContent, setSvgContent] = useState('');

  useEffect(() => {
    const fetchAndOptimizeSvg = async () => {
      try {
        const response = await axios.get(url);
        const optimizedSvg = optimizeSvg(response.data);
        setSvgContent(optimizedSvg);
      } catch (error) {
        console.error('Error fetching or optimizing SVG:', error);
      }
    };

    fetchAndOptimizeSvg();
  }, [url]);

  return (
    <div
      dangerouslySetInnerHTML={{ __html: svgContent }}
    />
  );
};

export default OptimizedSvg;
