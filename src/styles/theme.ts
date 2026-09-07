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
    brand: '#0A2558',
    brandLight: '#606B7D',
    accent: '#FFC107',
    background: '#FFFFFF',
    surface: '#F1F5F9',
    surfaceAlt: '#EBF0F7',
    border: 'rgba(0,0,0,0.08)',
    text: {
      main: '#1E293B',
      light: '#475569',
      title: '#0A2558',
      inverse: '#FFFFFF',
      onAccent: '#0A2558',
    },
  },
} as const;

export const darkTheme = {
  ...common,
  name: 'dark',
  colors: {
    brand: '#60A5FA',
    brandLight: '#94A3B8',
    accent: '#FFC107',
    background: '#0F172A',
    surface: '#1E293B',
    surfaceAlt: '#162032',
    border: 'rgba(255,255,255,0.08)',
    text: {
      main: '#F8FAFC',
      light: '#94A3B8',
      title: '#F8FAFC',
      inverse: '#0F172A',
      onAccent: '#0A2558',
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
