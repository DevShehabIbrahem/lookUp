import { optimize } from 'svgo';

const optimizeSvg = (svgContent) => {
  const result = optimize(svgContent, {
    plugins: [
      { name: 'removeTitle', active: true },
      { name: 'removeDesc', active: true },
      { name: 'removeDimensions', active: true },
      { name: 'removeViewBox', active: false },
      { name: 'cleanupIDs', active: false },
      { name: 'convertColors', params: { shorthex: false } },
      { name: 'convertPathData', active: true },
    ],
  });
  return result.data;
};

export default optimizeSvg;
