import { extendTheme, withDefaultColorScheme } from "@chakra-ui/react";

export const theme = extendTheme({

  colors: {
    purple: {
      500:"#5F00D9"
    }
  },
  p: {
    orange: "#5F00D9",
    black:"#171717"
  },

    fonts: {
    heading:  "Ubuntu",
    body: "Ubuntu",
  },
  textStyles: {
    h1: {
      fontSize: {
        base: "30px",
        lg:"32px"
      },
      lineHeight: {
        base: "34px",
        md:"36px"
      }
    },

     h2: {
      fontSize: {
        base: "20px",
        lg:"24px"
      },
      lineHeight: {
        base: "28px",
        md:"32px"
      }
    },
      h3: {
      fontSize: {
        base: "22px",
          lg: "24px",
        xl: '32px'
      },
      lineHeight: {
        base: "26px",
        md: "28px",
        xl:'36px'
      }
    },
       h4: {
      fontSize: {
        base: "20px",
        lg:"22px"
      },
      lineHeight: {
        base: "24px",
        md:"26px"
      }
    },
        h5: {
      fontSize: {
        base: "18px",
        lg:"20px"
      },
      lineHeight: {
        base: "22px",
        md:"24px"
      }
    },
         h6: {
      fontSize: {
        base: "16px",
        lg:"18px"
      },
      lineHeight: {
        base: "20px",
        md:"22px"
      }
    }
  },
  
  fontSize: {
    xs: "12ps",
    sm: "14px",
    base: { base: "16px", md: "18px" },
     lg: { base: "18px", md: "20px" },
      xl: { base: "20px", md: "22px" },
       "2xl": { base: "22px", md: "24px" },
        "3xl": { base: "24px", md: "28px" },
         "4xl": {base:"30px", md: "32px"},
  },
  styles: {
    global: {
      // styles for the `body`
      body: {
        bg: '#dbdada',
        
      },
    },
    components: {
      Button: {
        baseStyle: {
          fontWhite: "bold",
          borderRadius: "10px"
        }
      },
     
      formLabel: {
        baseStyle: {
          fontSize: "sm",
          color: "red",
          bg:"green"
        }
      },
      Input: {
        varients: {
          outline: {
            field: {
              h: "38px",
              borderRadius: "8px",
              fontSize: "sm",
            }
          }
        }
          
      },
    }
  }
  

   
},  withDefaultColorScheme({ colorScheme: 'purple' }),)