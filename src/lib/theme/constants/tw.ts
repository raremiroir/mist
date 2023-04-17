import mist_config from "../../mist.config";
import defaultTheme from 'tailwindcss/defaultTheme'
import { colorGen } from "../generator/theme";

const tailwind = {
   theme: {
      // Breakpoints
      screens: mist_config.theme.screens,
      // Font Size
      fontSize: {
         xs: ['10px', '14px'],
         sm: ['12px', '14px'],
         base: ['14px', '18px'],
         lg: ['16px', '18px'],
         xl: ['18px', '24px'],
         '2xl': ['20px', '24px'],
         '3xl': ['24px', '28px'],
         '4xl': ['28px', '32px'],
         '5xl': ['32px', '36px'],
         '6xl': ['40px', '44px'],
         '7xl': ['48px', '56px'],
         '8xl': ['56px', '60px'],
         '9xl': ['64px', '68px'],
      },
      // Extend theme
      extend: {
         // Font Size
         fontSize: {
            '2xs': ['8px', '10px'],
            '10xl': ['72px', '76px'],
            '11xl': ['80px', '84px'],
            'title-5xl': "clamp(5rem, 4.4375rem + 3vw, 6.5rem)",
            'title-4xl': "clamp(4rem, 3.625rem + 2vw, 5rem)",
            'title-3xl': "clamp(3rem, 2rem + 4vw, 5rem)",
            'title-2xl': "clamp(2.5rem, 1.375rem + 4.5vw, 4.75rem)",
            'title-xl': "clamp(2rem, 0.75rem + 5vw, 4.5rem)",
            'title-lg': "clamp(1.75rem, 1.125rem + 2.5vw, 3rem)",
            'title-md': "clamp(1.5rem, 1rem + 2vw, 2.5rem)",
            'title-sm': "clamp(1.25rem, 0.875rem + 1.5vw, 2rem)",
            'title-xs': "clamp(1rem, 0.75rem + 1.25vw, 1.75rem)",
            'title-2xs': "clamp(1rem, 0.875rem + 0.6vw, 1.5rem)",
            'title-3xs': "clamp(0.875rem, 0.75rem + 0.5vw, 1.125rem)",
            'title-4xs': "clamp(0.75rem, 0.5rem + 1vw, 1.25rem)",
            'clamp-xs': "clamp(0.5rem, 0.4375rem + 0.3333vw, 0.6875rem)",
            'clamp-sm': "clamp(0.5625rem, 0.5rem + 0.3333vw, 0.75rem)",
            'clamp-md': "clamp(0.625rem, 0.5417rem + 0.4444vw, 0.875rem)",
            'clamp-lg': "clamp(0.75rem, 0.625rem + 0.6667vw, 1.125rem)",
            'clamp-xl': "clamp(0.875rem, 0.7917rem + 0.4444vw, 1.125rem)",
            'clamp-2xl': "clamp(1rem, 0.875rem + 0.6667vw, 1.375rem)",
            'clamp-3xl': "clamp(1.25rem, 1.0833rem + 0.8889vw, 1.75rem)",
         },
         // Font Family
         fontFamily: {
            body: [mist_config.theme.font.family.body, ...defaultTheme.fontFamily.sans],
            title: [mist_config.theme.font.family.title, ...defaultTheme.fontFamily.sans],
            code: [mist_config.theme.font.family.code?? 'Inter', ...defaultTheme.fontFamily.mono],
         },
         // Colors
         colors: colorGen([
            { name: 'primary', color: mist_config.theme.colors.primary },
            { name: 'secondary', color: mist_config.theme.colors.secondary },
            { name: 'tertiary', color: mist_config.theme.colors.tertiary },
            { name: 'success', color: mist_config.theme.colors.success },
            { name: 'warning', color: mist_config.theme.colors.warning },
            { name: 'error', color: mist_config.theme.colors.error },
            { name: 'surface', color: mist_config.theme.colors.surface },
         ]),
         // Opacity
         opacity: {
            1: '.01', 1.5: '.015', 2: '.02', 2.5: '.025', 3: '.03', 3.5: '.035', 4: '.04', 
            4.5: '.045', 15: '.15', 35: '.35', 45: '.45', 55: '.55', 65: '.65', 
            80: '.8', 85: '.85', 96: '.96', 97: '.97', 98: '.98', 99: '.99',
         },
         // Z-index
         zIndex: {
            2: 2,
            3: 3,
            99: 99,
				999: 999,
         },
         // Spacing
         spacing: {
            13: '3.25rem',
            15: '3.75rem',
            17: '4.25rem',
            18: '4.5rem',
            19: '4.75rem',
            21: '5.25rem',
            22: '5.5rem',
            23: '5.75rem',
            25: '6.25rem',
            26: '6.5rem',
            27: '6.75rem',
            50: '12.5rem',
            54: '13.5rem',
            58: '14.5rem',
            62: '15.5rem',
            66: '16.5rem',
            68: '17rem',
            70: '17.5rem',
            74: '18.5rem',
            76: '19rem',
            78: '19.5rem',
            84: '21rem',
            88: '22rem',
            92: '23rem',
            100: '25rem',
            104: '26rem',
            108: '27rem',
            112: '28rem',
            116: '29rem',
            120: '30rem',
            124: '31rem',
            128: '32rem',
            132: '33rem',
            136: '34rem',
            140: '35rem',
            144: '36rem',
            148: '37rem',
            152: '38rem',
            156: '39rem',
            160: '40rem',
            180: '45rem',
            200: '50rem',
            220: '55rem',
            240: '60rem',
            260: '65rem',
            280: '70rem',
            300: '75rem',
         },
         // Extend Shadows
			boxShadow: {
				'inner-xs-noblur':      'inset 1px  -1px  0 0 #00000040',
				'inner-sm-noblur':      'inset 2px  -2px  0 0 #00000040',
				'inner-md-noblur':      'inset 4px  -4px  0 0 #00000040',
				'inner-md-noblur-grow': 'inset 5px  -5px  0 0 #00000040',
				'inner-lg-noblur':      'inset 6px  -6px  0 0 #00000040',
				'inner-xl-noblur':      'inset 8px  -8px  0 0 #00000040',
				'inner-xxl-noblur':     'inset 10px -10px 0 0 #00000040',
				'xs-noblur':      '-1px  1px  0 0 #00000040',
				'sm-noblur':      '-2px  2px  0 0 #00000040',
				'md-noblur':      '-4px  4px  0 0 #00000040',
				'md-noblur-grow': '-5px  5px  0 0 #00000040',
				'lg-noblur':      '-6px  6px  0 0 #00000040',
				'xl-noblur':      '-8px  8px  0 0 #00000040',
				'xxl-noblur':     '-10px 10px 0 0 #00000040',
			},
			dropShadow: {
				'invis':          '-1px 1px   0px #00000000',
				'xs-noblur':      '-1px 1px   0px #00000040',
				'sm-noblur':      '-2px 2px   0px #00000040',
				'md-noblur':      '-4px 4px   0px #00000040',
				'md-noblur-grow': '-5px 5px   0px #00000040',
				'lg-noblur':      '-6px 6px   0px #00000040',
				'xl-noblur':      '-8px 8px   0px #00000040',
				'xxl-noblur':     '-10px 10px 0px #00000040',
			},
			// Extended Transition Timings
			transitionTimingFunction: {
				'xsmall': 'cubic-bezier(0.18, 0.89, 0.32, 1.23)',
				'small':  'cubic-bezier(0.00, 0.86, 0.62, 1.11)',
				'medium': 'cubic-bezier(0.00, 0.86, 0.67, 1.59)',
				'large':  'cubic-bezier(0.00, 1.89, 0.67, 1.59)',
				'xlarge': 'cubic-bezier(0.00, 1.89, 0.52, 2.25)',
			},
			// Extended Keyframes
			keyframes: {
				zoomInOut: {
					'0%, 100%': { transform: 'scale(100%)'},
					'50%': { transform: 'scale(110%)'},
				},
				zoomOutIn: {
					'0%, 100%': { transform: 'scale(100%)'},
					'50%': { transform: 'scale(90%)'},
				},
				bounceReverse: {
					'0%, 100%': { transform: 'translate(0, 0%)'},
					'50%': { transform: 'translate(0, 7%)'},
				},
				waving: {
					'0%, 100%': { transform: 'translate(0%, 0%) rotate(0) skew(0)'},
					'50%': { transform: 'translate(0%, 5%) rotate(2deg) skew(0, 12deg)'},
				},
				wiggle: {
					'0%, 100%': { transform: 'rotate(0deg)' },
					'33%': { transform: 'rotate(3deg)' },
					'66%': { transform: 'rotate(-3deg)' },
				 },
				slideInRight: {
					'0%': { transform: 'translate(-100%, 0)' },
					'100%': { transform: 'translate(0, 0)' },
				 },
				slideInLeft: {
					'0%': { transform: 'translate(100%, 0)' },
					'100%': { transform: 'translate(0, 0)' },
				 },
				slideInDown: {
					'0%': { transform: 'translate(0%, -100%)' },
					'100%': { transform: 'translate(0, 0)' },
				 },
				slideInUp: {
					'0%': { transform: 'translate(0%, 100%)' },
					'100%': { transform: 'translate(0, 0)' },
				 },
				spinReverse: {
					'to': { transform: 'rotate(-360deg)' }
				}
			},
			// Extended Animation
			animation: {
				bounceReverse: 'bounceReverse 1s ease-in-out infinite',
				waving: 'waving 1s ease-in-out infinite',
				wiggle: 'wiggle 1s ease-in-out infinite',
				spinReverse: 'spin 1s linear infinite',
			},
      },
   }
}

export default tailwind;