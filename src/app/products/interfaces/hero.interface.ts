export enum Color {
  Red = 'red',
  Green = 'green',
  Blue = 'blue',
  Black = 'black',
  Yellow = 'yellow',
}

export interface Hero {
  name: string;
  canFly: boolean;
  color: Color;
}
