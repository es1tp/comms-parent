import { createTamagui } from 'tamagui'
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
  
  dark_yellow: [
    'rgba(26, 22, 0, 0)',
    'rgba(26, 22, 0, 0.25)',
    'rgba(26, 22, 0, 0.5)',
    'rgba(26, 22, 0, 0.75)',
    '#1a1600',
    '#332d00',
    '#4d4300',
    '#665a00',
    '#807000',
    '#998700',
    '#b39d00',
    '#ccb400',
    '#FFD700',  // neon yellow
    '#FFE033',
    '#FFEB66',
    '#FFF599',
    'rgba(255, 245, 153, 0.75)',
    'rgba(255, 245, 153, 0.5)',
    'rgba(255, 245, 153, 0.25)',
    'rgba(255, 245, 153, 0)',
  ],
  
  dark_pink: [
    'rgba(26, 5, 17, 0)',
    'rgba(26, 5, 17, 0.25)',
    'rgba(26, 5, 17, 0.5)',
    'rgba(26, 5, 17, 0.75)',
    '#1a0511',
    '#330a22',
    '#4d0f33',
    '#661444',
    '#801955',
    '#991e66',
    '#b32377',
    '#cc2888',
    '#FF2E97',  // hot pink
    '#FF5BAD',
    '#FF88C3',
    '#FFB5D9',
    'rgba(255, 181, 217, 0.75)',
    'rgba(255, 181, 217, 0.5)',
    'rgba(255, 181, 217, 0.25)',
    'rgba(255, 181, 217, 0)',
  ],
  
  dark_cyan: [
    'rgba(0, 26, 26, 0)',
    'rgba(0, 26, 26, 0.25)',
    'rgba(0, 26, 26, 0.5)',
    'rgba(0, 26, 26, 0.75)',
    '#001a1a',
    '#003333',
    '#004d4d',
    '#006666',
    '#008080',
    '#009999',
    '#00b3b3',
    '#00cccc',
    '#00F0FF',  // electric cyan
    '#33F3FF',
    '#66F6FF',
    '#99F9FF',
    'rgba(153, 249, 255, 0.75)',
    'rgba(153, 249, 255, 0.5)',
    'rgba(153, 249, 255, 0.25)',
    'rgba(153, 249, 255, 0)',
  ],
  
  dark_green: [
    'rgba(10, 26, 5, 0)',
    'rgba(10, 26, 5, 0.25)',
    'rgba(10, 26, 5, 0.5)',
    'rgba(10, 26, 5, 0.75)',
    '#0a1a05',
    '#14330a',
    '#1e4d0f',
    '#286614',
    '#328019',
    '#3c991e',
    '#46b323',
    '#50cc28',
    '#39FF14',  // toxic green
    '#5DFF47',
    '#81FF7A',
    '#A5FFAD',
    'rgba(165, 255, 173, 0.75)',
    'rgba(165, 255, 173, 0.5)',
    'rgba(165, 255, 173, 0.25)',
    'rgba(165, 255, 173, 0)',
  ],
  
  dark_red: [
    'rgba(26, 5, 5, 0)',
    'rgba(26, 5, 5, 0.25)',
    'rgba(26, 5, 5, 0.5)',
    'rgba(26, 5, 5, 0.75)',
    '#1a0505',
    '#330a0a',
    '#4d0f0f',
    '#661414',
    '#801919',
    '#991e1e',
    '#b32323',
    '#cc2828',
    '#FF003C',  // bright red BORDER
    '#FF3363',
    '#FF668A',
    '#FF99B1',
    'rgba(255, 153, 177, 0.75)',
    'rgba(255, 153, 177, 0.5)',
    'rgba(255, 153, 177, 0.25)',
    'rgba(255, 153, 177, 0)',
  ],
  
  dark_button: [
    'rgba(26, 5, 5, 0)',
    'rgba(26, 5, 5, 0.25)',
    'rgba(26, 5, 5, 0.5)',
    'rgba(26, 5, 5, 0.75)',
    '#331111',                   // 4 - very mild reddish fill
    '#200808',                   // 5 - slightly brighter on hover
    '#2a0a0a',                   // 6 - press state
    '#330a0a',                   // 7
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
  
  surface2: {
    background: 6,
    backgroundFocus: 7,
    backgroundHover: 7,
    backgroundPress: 8,
    borderColor: 12,
    borderColorFocus: 14,
    borderColorHover: 13,
    borderColorPress: 14,
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
    background: 4,           // mild red fill
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
    
    borderColor: 15,         // red border
    borderColorFocus: 13,
    borderColorHover: 13,
    borderColorPress: 12,
    
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
    yellow: {
      palette: 'dark_yellow',
      template: 'base',
    },
    pink: {
      palette: 'dark_pink',
      template: 'base',
    },
    cyan: {
      palette: 'dark_cyan',
      template: 'base',
    },
    green: {
      palette: 'dark_green',
      template: 'base',
    },
    red: {
      palette: 'dark_red',
      template: 'base',
    },
  })
  .addChildThemes({
    Button: {
      palette: 'dark_button',
      template: 'button',
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
})

export type Conf = typeof tamaguiConfig

declare module 'tamagui' {
  interface TamaguiCustomConfig extends Conf {}
}

export default tamaguiConfig