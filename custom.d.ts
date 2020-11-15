declare module '*.jpg' {
  const imgSrc: string;
  export default imgSrc;
}

declare module '*.png' {
  const imgSrc: string;
  export default imgSrc;
}

declare module '*.svg' {
  const imgSrc: string;
  export default imgSrc;
}

declare module '*.scss' {
  const content: {
    [className: string]: string;
  };
  export default content;
}
