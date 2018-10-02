const spitSize = size => {
  return {
    pixels: `${size}px`,
    width: size,
  };
};

export default {
  iphone: spitSize(375),
  ipad: spitSize(768),
  desktop: spitSize(1024),
  desktopXL: spitSize(1440),
  desktopXXL: spitSize(1920),
};
