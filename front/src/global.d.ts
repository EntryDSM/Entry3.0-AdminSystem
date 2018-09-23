// Event target
interface Target {
  target: HTMLInputElement;
}

// Image load
declare module '*.png' {
  const value: any;
  export = value;
}

declare module '*.jpg' {
  const value: any;
  export = value;
}