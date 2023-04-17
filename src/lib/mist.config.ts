

export const mist_config:any = {
   prefix: "m",
   theme: {
      // Colors
      colors: {
         primary: "#14b8a6",
         secondary: "#F34213",
         tertiary: "#0891b2",
         success: "#65a30d",
         warning: "#fbbf24",
         error: "#dc2626",
         surface: "#3C4854",
      },
      // Font
      font: {
         family: {
            body: "Inter",
            title: "Inter",
            code: "Inter",
         },
         color_on: {
            primary: "#fff",
            secondary: "#fff",
            tertiary: "#fff",
            success: "#000",
            warning: "#000",
            error: "#fff",
            surface: "#fff",
         }
      },
      // Breakpoints
      screens: {
         'xs':  '320px',
         'sm':  '480px',
         'md':  '768px',
         'lg':  '992px',
         'xl':  '1200px',
         '2xl': '1440px',
         '3xl': '1920px',
      },
   }
   
}

export default mist_config;