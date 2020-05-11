const Default = {
  container: '1440px',
  body: {
    bg: '#111',
    color: '#909090',
    margin: '0',
    padding: '0',
    font: {
      family: 'Simplon',
      weight: 'Regular'
    }
  },
  breakpoints: {
    mobile: 320,
    tablet: 768,
    desktop: 1024,
    desktopLarge: 1280
  },
  titles: {
    font: 'robotoregular',
    color: '#000',
    size: {
      h1: '4.2rem',
      h2: '2.4rem',
      h3: '1.8rem',
      h4: '1.6rem',
      h5: '1.3rem',
      h6: '1.0rem'
    }
  },
  buttons: {
    font: {
      family: 'Simplon',
      weight: 'Medium'
    }
  },
  inner: {
    opacity: 1
  },
  colors: {
    primary: '#909090',
    secondary: '#900ae9',
    success: '#00aa0b',
    error: '#f8562c',
    warning: '#ff944d',
    danger: '#f8562c',
    info: '#009df7',
    light: '#f7f7f7',
    dark: '#222',
    link: '#fafafa',
    gray: '#909090',
    white: '#fff',
    lightgray: '#cfcfcf',
    text:"#fafafa"
  },
  gradients: {
    primary: {
      from: '#d0b71d',
      to: '#d82482'
    },
    secondary: {
      from: '#ffff00',
      to: '#00ceff'
    },
    success: {
      from: '#A7E033',
      to: '#07D1A0'
    },
    error: {
      from: '#E02B72',
      to: '#DE1F2D'
    },
    warning: {
      from: '#ED327A',
      to: '#FD700C'
    },
    light: {
      from: '#fafafa',
      to: '#222222'
    },
    dark: {
      from: '#222222',
      to: '#fafafa'
    },
  }
};
export default Default;
export {Default};
