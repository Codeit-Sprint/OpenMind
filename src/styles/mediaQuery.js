const size = {
  mobile: '375px',
  tablet: '768px',
  pc: '1200px',
};

export const device = {
  mobile: `(min-width: ${size.mobile}) and (max-width: ${size.tablet})`,
  tablet: `(min-width: ${size.tablet}) and (max-width: ${size.pc})`,
  pc: `(min-width: ${size.pc})`,
};
