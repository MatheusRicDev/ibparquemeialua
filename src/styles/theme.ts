const common = {
  fonts: {
    primary: 'var(--font-primary), sans-serif',
  },
  spacing: {
    xs: '0.25rem',
    sm: '0.5rem',
    md: '1rem',
    lg: '2rem',
    xl: '4rem',
    xxl: '8rem',
  },
  borderRadius: {
    sm: '4px',
    md: '8px',
    lg: '16px',
    full: '9999px',
  },
  shadows: {
    sm: '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)',
    md: '0 4px 6px rgba(0,0,0,0.1)',
    lg: '0 10px 20px rgba(0,0,0,0.15)',
  },
  breakpoints: {
    mobile: '576px',
    tablet: '768px',
    desktop: '1024px',
    wide: '1440px',
  },
  transitions: {
    default: '0.3s ease-in-out',
  },
};

export const lightTheme = {
  ...common,
  name: 'light',
  colors: {
    brand: '#3F4B3D',
    brandLight: '#667361',
    accent: '#B59A5A',
    background: '#F4F2EB',
    surface: '#FFFFFF',
    surfaceAlt: '#DDD8CA',
    border: 'rgba(0,0,0,0.08)',
    text: {
      main: '#20251F',
      light: '#667361',
      title: '#293329',
      inverse: '#FFFFFF',
      onAccent: '#FFFFFF',
    },
  },
} as const;

export const darkTheme = {
  ...common,
  name: 'dark',
  colors: {
    brand: '#667361',
    brandLight: '#A7B0A2',
    accent: '#B59A5A',
    background: '#20251F',
    surface: '#293329',
    surfaceAlt: '#20251F',
    border: 'rgba(255,255,255,0.08)',
    text: {
      main: '#F4F2EB',
      light: '#A7B0A2',
      title: '#F4F2EB',
      inverse: '#20251F',
      onAccent: '#FFFFFF',
    },
  },
} as const;

export type ThemeType = {
  name: string;
  fonts: typeof common.fonts;
  spacing: typeof common.spacing;
  borderRadius: typeof common.borderRadius;
  shadows: typeof common.shadows;
  breakpoints: typeof common.breakpoints;
  transitions: typeof common.transitions;
  colors: {
    brand: string;
    brandLight: string;
    accent: string;
    background: string;
    surface: string;
    surfaceAlt: string;
    border: string;
    text: {
      main: string;
      light: string;
      title: string;
      inverse: string;
      onAccent: string;
    };
  };
};
