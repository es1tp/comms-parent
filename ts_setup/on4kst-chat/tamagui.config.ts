import { createTamagui } from 'tamagui'
import { createAnimations } from '@tamagui/animations-react-native'
import { media, shorthands, tokens } from '@tamagui/config/v4'
import { createThemeBuilder } from '@tamagui/theme-builder'

// Cyberpunk 2077 color palettes (20 colors for createThemeBuilder)
const palettes = {
  dark: [
    'rgba(10, 10, 10, 0)',      // 0 - transparent bg
    'rgba(10, 10, 10, 0.25)',   // 1
    'rgba(10, 10, 10, 0.5)',    // 2
    'rgba(10, 10, 10, 0.75)',   // 3
    '#0a0a0a',                   // 4 - solid background
    '#1a0505',                   // 5 - very mild reddish fill
    '#1a1a1a',                   // 6
    '#222222',                   // 7
    '#2a2a2a',                   // 8
    '#333333',                   // 9
    '#444444',                   // 10
    '#666666',                   // 11
    '#FFD700',                   // 12 - NEON YELLOW (primary accent)
    '#FFE033',                   // 13 - bright yellow
    '#00F0FF',                   // 14 - ELECTRIC CYAN / NEON BLUE
    '#eeeeee',                   // 15 - foreground
    'rgba(238, 238, 238, 0.75)', // 16 - transparent fg
    'rgba(238, 238, 238, 0.5)',  // 17
    'rgba(238, 238, 238, 0.25)', // 18
    'rgba(238, 238, 238, 0)',    // 19
  ],
  dark_button: [
    'rgba(26, 5, 5, 0)',
    'rgba(26, 5, 5, 0.25)',
    'rgba(26, 5, 5, 0.5)',
    'rgba(26, 5, 5, 0.75)',
    '#331111',                   // 4 - visible reddish fill
    '#3d1414',                   // 5 - slightly brighter on hover
    '#471717',                   // 6 - press state
    '#521a1a',                   // 7
    '#2a2a2a',                   // 8
    '#333333',                   // 9
    '#444444',                   // 10
    '#666666',                   // 11
    '#FF003C',                   // 12 - REDDISH BORDER
    '#FF3363',                   // 13 - brighter red on hover
    '#00F0FF',                   // 14 - NEON BLUE TEXT
    '#00F0FF',                   // 15 - neon blue for text color
    'rgba(0, 240, 255, 0.75)',   // 16
    'rgba(0, 240, 255, 0.5)',    // 17
    'rgba(0, 240, 255, 0.25)',   // 18
    'rgba(0, 240, 255, 0)',      // 19
  ],
}

// Template for mapping semantic names to palette indices
const templates = {
  base: {
    background: 4,
    backgroundFocus: 5,
    backgroundHover: 5,
    backgroundPress: 6,
    backgroundStrong: 7,
    backgroundTransparent: 1,
    
    color: 15,
    colorFocus: 14,
    colorHover: 15,
    colorPress: 14,
    colorTransparent: 18,
    
    borderColor: 12,           // neon yellow
    borderColorFocus: 14,      // electric cyan
    borderColorHover: 13,      // bright yellow
    borderColorPress: 14,      // electric cyan
    
    placeholderColor: 11,
    
    shadowColor: 12,
    shadowColorFocus: 14,
    shadowColorHover: 13,
    shadowColorPress: 11,
  },
  
  surface1: {
    background: 5,
    backgroundFocus: 6,
    backgroundHover: 6,
    backgroundPress: 7,
    borderColor: 12,
    borderColorFocus: 14,
    borderColorHover: 13,
    borderColorPress: 14,
  },
  input_secondary: {
    background: 12,
    backgroundFocus: 12,
    backgroundHover: 12,
    backgroundPress: 12,
    borderColor: 12,
    borderColorFocus: 12,
    borderColorHover: 12,
    borderColorPress: 12,
  },
  surface_secondary: {
    background: 12,
    backgroundFocus: 12,
    backgroundHover: 12,
    backgroundPress: 12,
    borderColor: 12,
    borderColorFocus: 12,
    borderColorHover: 12,
    borderColorPress: 12,
  },
  active: {
    background: 8,
    backgroundFocus: 9,
    backgroundHover: 9,
    backgroundPress: 10,
    borderColor: 13,
    borderColorFocus: 14,
    borderColorHover: 14,
    borderColorPress: 14,
  },
  button: {
    background: 3,           // mild red fill
    backgroundFocus: 5,
    backgroundHover: 5,
    backgroundPress: 6,
    backgroundStrong: 7,
    backgroundTransparent: 1,
    
    color: 15,               // cyan text
    colorFocus: 14,
    colorHover: 15,
    colorPress: 14,
    colorTransparent: 18,
    
    borderColor: 12,         // red border
    borderColorFocus: 13,
    borderColorHover: 13,
    borderColorPress: 12,
    
    placeholderColor: 11,
    
    shadowColor: 12,
    shadowColorFocus: 14,
    shadowColorHover: 13,
    shadowColorPress: 11,
  },
  
  heading: {
    background: 4,
    backgroundFocus: 5,
    backgroundHover: 5,
    backgroundPress: 6,
    backgroundStrong: 7,
    backgroundTransparent: 1,
    
    color: 14,               // neon cyan text
    colorFocus: 14,
    colorHover: 13,          // bright yellow on hover
    colorPress: 14,
    colorTransparent: 18,
    
    borderColor: 12,
    borderColorFocus: 14,
    borderColorHover: 13,
    borderColorPress: 14,
    
    placeholderColor: 11,
    
    shadowColor: 12,
    shadowColorFocus: 14,
    shadowColorHover: 13,
    shadowColorPress: 11,
  },
}

// Non-inherited values
const nonInherited = {
  shadowColor: 'rgba(255, 215, 0, 0.3)',
  shadowColorHover: 'rgba(0, 240, 255, 0.4)',
  shadowColorPress: 'rgba(255, 46, 151, 0.3)',
}

// Build themes using createThemeBuilder
const themeBuilder = createThemeBuilder()
  .addPalettes(palettes)
  .addTemplates(templates)
  .addThemes({
    dark: {
      template: 'base',
      palette: 'dark',
      nonInheritedValues: nonInherited,
    },
  })

  .addChildThemes({
    Button: {
      palette: 'dark_button',
      template: 'button',
    },
    Heading: {
      template: 'heading',
    },
    Input: {
      template: 'surface1',
    },
    TextArea: {
      template: 'surface1',
    },
    Card: {
      template: 'surface1',
    },
    ListItem: {
      template: 'surface1',
    },
  })

const themes = themeBuilder.build()

// Add cyberpunk color tokens for direct access
const cyberpunkTokens = {
  ...tokens,
  color: {
    neonYellow: '#FFD700',
    brightYellow: '#FFE033',
    neonCyan: '#00F0FF',
    neonPink: '#FF2E97',
    toxicGreen: '#39FF14',
    errorRed: '#FF003C',
  }
}

// Create Tamagui config with v4 individual exports
const tamaguiConfig = createTamagui({
  defaultFont: 'body',
  shouldAddPrefersColorThemes: false,
  themeClassNameOnRoot: true,
  fonts: {
    body: {
      family: 'System',
      size: {
        1: 12,
        2: 14,
        3: 16,
        4: 18,
        5: 20,
        6: 24,
        7: 28,
        8: 32,
        9: 40,
        10: 48,
      },
      lineHeight: {
        1: 16,
        2: 20,
        3: 24,
        4: 28,
        5: 32,
        6: 36,
        7: 40,
        8: 44,
        9: 52,
        10: 60,
      },
      weight: {
        4: '400',
        7: '700',
      },
    },
  },
  shorthands,
  themes,
  tokens: cyberpunkTokens,
  media,

  animations: createAnimations({
    // your animation configs
    fast: {
      damping: 20,
      mass: 1.2,
      stiffness: 250,
    },
    medium: {
      damping: 15,
      mass: 1,
      stiffness: 120,
    },
    slow: {
      damping: 20,
      mass: 1,
      stiffness: 60,
    },
  }),
})

export type Conf = typeof tamaguiConfig

declare module 'tamagui' {
  interface TamaguiCustomConfig extends Conf {}
}

export default tamaguiConfig