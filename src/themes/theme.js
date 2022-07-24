import React from "react";
import { ThemeProvider } from "styled-components";

const theme = {
  breakpoints: [' 480px', '768px', '1024px'],
  colors: {
    text: '#D7D9F4',
    background: '#25274D',
    primary: '#464866',
    header: 'rgb(70 72 102 / 97%);',
    secondary: '#2E9CCA',
    muted: '#f6f6f9',
    gray: '#dddddf',
    highlight: 'hsla(205, 100%, 40%, 0.125)',
  },
  fonts: {
    body: 'Roboto, sans-serif',
    heading: 'Jost, sans-serif',
  },
  fontFamily: {
    body: 'Roboto, sans-serif',
    heading: 'Jost, sans-serif',
  },
  fontSizes: [
    12, 14, 16, 22, 28, 34
  ],
  fontWeights: {
    body: 500,
    heading: 700,
    bold: 700,
  },
  lineHeights: {
    body: 1.2,
    heading: 1.25,
  },
  space: [0, 6, 10, 20, 40, 80, 120, 256, 512],
  sizes: {
    avatar: 48,
  },
  radii: {
    default: 4,
    circle: 99999,
  },
  shadows: {
    card: '0 15px 20px rgb(70 72 102 / 80%)',
    hide: '0 0px 0px rgb(70 72 102)',
  },
  transitions: {
    all: 'all .3s ease',
  },
  // rebass variants
  text: {
    heading: {
      fontFamily: 'heading',
      lineHeight: 'heading',
      fontWeight: 'heading',
      letterSpacing: '1px',
      color: 'text',
      fontSize: [2, 4, 5],
    },
    text: {
      fontFamily: 'body',
      fontWeight: 'body',
      lineHeight: 'body',
      color: 'text',
      fontSize: [1, 2, 2],

    },
    caps: {
      textTransform: 'uppercase',
      letterSpacing: '0.1em',
    },
    subTitle: {
      fontFamily: 'heading',
      fontWeight: 'heading',
      lineHeight: 'heading',
      display: 'inline-block',
      borderBottom: '3px solid',
      borderBottomColor: 'secondary',
      color: 'text',
      fontSize: [2, 2, 3],
    },
    buttonText: {
      fontFamily: 'heading',
      fontWeight: 'body',
      lineHeight: 'heading',
      fontSize: [1, 1, 1],
      padding: [1, 1, 2],
      color: 'text',
    },
    error_message: {
      fontFamily: 'body',
      fontWeight: 'body',
      lineHeight: 'body',
      color: 'red',
      fontSize: [1, 2, 2],
    },
    success_message: {
      fontFamily: 'body',
      fontWeight: 'body',
      lineHeight: 'body',
      color: 'green',
      fontSize: [1, 2, 2],
    }
  },
  variants: {
    avatar: {
      width: 'avatar',
      height: 'avatar',
      borderRadius: 'circle',
    },
    card: {
      p: 2,
      bg: 'background',
      boxShadow: 'card',
    },
    link: {
      fontFamily: 'heading',
      lineHeight: 'body',
      fontWeight: 'body',
      color: 'text',
      textDecoration: 'none',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      fontSize: [1, 2, 2],
      transition: 'all .3s ease',
      cursor: 'pointer',
      ':hover,:focus,.active': {
        color: 'secondary',
      },
      footerLink: {
        display: 'inline-block',
        fontFamily: 'heading',
        lineHeight: 'body',
        fontWeight: 'body',
        color: 'text',
        textDecoration: 'none',
        transition: 'all .3s ease',
        cursor: 'pointer',
        ':hover,:focus,.active': {
          color: 'secondary',
        },
      }
    },
    nav: {
      fontSize: 1,
      display: 'block',
      width: '100%',
      height: '100%',
      color: 'primary',
      textDecoration: 'none',
    },
    container: {
      maxWidth: '1100px',
      margin: '0 auto',
      display: 'flex',
      flexWrap: 'wrap',
      py: [3, 4, 5],
      px: [1, 1, 2],
    },
    section: {
      width: '100%',
      maxWidth: '1100px',
      margin: '0 auto',
      display: 'flex',
      flexWrap: 'wrap',
      py: [3, 4, 5],
      px: [2, 3, 3],
    },
    gallery: {
      width: '100%',
      backgroundColor: 'primary',
    },
    wrapperWhite: {
      width: '100%',
      backgroundColor: 'text',
    },
    wrapperBlue: {
      width: '100%',
      backgroundColor: 'background',
    },
    flexCenter: {
      justifyContent: 'center',
      alignItems: 'center',
      flexWrap: 'wrap',
    },
    menu: {
      topMenu: {
        listStyle: 'none',
        display: 'grid',
        justifyItems: 'stretch',
        gridAutoFlow: 'column',
        height: '100%',

        '&.menu_2, &.menu_3': {
          position: 'absolute',
          listStyle: 'none',
          display: 'block',
          height: '100%',
          bottom: '0',
          left: '100%',
          visibility: 'hidden',
          opacity: 0,
          transition: 'all .3s ease',
        },
        '&.menu_1>li>ul.menu_2': {
          left: '0',
          top: '100%',
          width: '100%',
        },
        '&.menu_1 li:hover > ul': {
          opacity: 1,
          visibility: 'visible',
        },
        '&.menu_1 li li': {
          border: '2px solid #2E9CCA',
          borderTop: 'none',
        },
        '&.menu_1 li li:first-child': {
          borderTop: '2px solid #2E9CCA',
        },
        '& li': {
          position: 'relative',
          display: 'block',
          backgroundColor: 'primary',
        },
        '&.menu_1>li': {
          backgroundColor: 'transparent',
        },
        '& a': {
          lineHeight: '1.2em',
          height: '100%',
          fontSize: [1, 1, 1],
          textAlign: 'center',
          display: 'block',
          transition: 'all .1s ease',
          ':hover': {
            color: '#fff',
            bg: '#ffffff12',
            transition: 'none',
          }
        }
      },
      bottomMenu: {
        '& a': {
          padding: [1, 2, 2],
          height: '100%',
          '&:hover': {
            backgroundColor: 'secondary',
            color: 'primary',
          },
        },
        '&.menu_1': {
          display: 'grid',
          gridTemplate: 'repeat(3, 1fr) auto /1fr 1fr 1fr',
          gridAutoRows: '100%',
        },
        '&.menu_1>li:first-child>a': {
        },
        '&.menu_2': {
          display: 'flex',
          flexDirection: 'column',
        },
        '&.menu_1 li:first-child .menu_2': {
          display: 'grid',
          gridTemplate: '1fr/1fr 1fr',
          gap: '10px',
        },

        '&.menu_3 li a': {
          padding: 0,
          fontSize: [1, 1, 2],
        },
        '&.menu_1>li': {
          alignSelf: 'start',
        },
        '&.menu_1>li:first-child': {
          gridRow: '1 / 6',
          gridColumn: '1/3',
        }
      },
    },

    pageSubMenu: {
      justifyContent: 'center',
      alignItems: 'center',
      width: '33%',
      my: 1,
      px: [2, 2, 2],
      div: {
        fleDirection: 'column',
        justifyContent: 'center',
        width: '100%',
        height: '100%',
      },
      a: {
        width: '100%',
        minHeight: '60px',
        py: [2, 3, 3],
        px: [2, 3, 3],
        textAlign: 'center',
        flex: '1 0 auto',
        display: 'flex',
        position: 'relative',
        overflow: 'hidden',
        '&:hover': {
          color: 'text',
        },
        '&:before': {
          content: "''",
          position: 'absolute',
          width: '0',
          height: '0',
          transform: 'translate(-50%, -50%)',
          borderRadius: '50%',
          bg: 'primary',
          transition: 'width .8s, height .8s',
        },
        '&:hover:before': {
          width: '900px',
          height: '900px',
          bg: 'primary',
        },
        span: {
          position: 'relative',
          zIndex: 1,
        },
      },

    }
  },
  buttons: {
    primary: {
      fontSize: 2,
      fontWeight: 'body',
      fontFamily: 'heading',
      color: 'text',
      bg: 'primary',
      borderRadius: 'default',
      border: '2px solid',
      borderColor: 'text',
      cursor: 'pointer',
      transition: 'all .3s ease',
      ':hover,:focus,.active': {
        color: 'background',
        bg: 'secondary',
        borderColor: 'background',
      }
    },
    secondary: {
      variant: 'buttons.primary',
      color: 'background',
      bg: 'secondary',
    },
    closePopup: {
      variant: 'buttons.primary',
      width: '35px',
      height: '35px',
      p: '0',
      color: 'background',
      borderColor: '#fff',
      ':hover,:focus,.active': {
        transform: 'scale(1.2)'
      }
    }
  },
  styles: {
    root: {
      fontFamily: 'heading',
      fontWeight: 'body',
      lineHeight: 'heading',
    },
  },
}


const Theme = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default Theme;