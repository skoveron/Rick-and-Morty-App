import { CSSProperties } from "react";

export interface ICharacter {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: {
    name: string;
    url: string;
  };
  location: {
    name: string;
    url: string;
  };
  image: string;
  episode: string[];
  url: string;
  created: string;
}

export interface AllCharacter<T> {
  info: {
    count: number;
    pages: number;
    next: string;
    prev: string;
  };
  results: [T];
}

export interface ISingeCharacter {
  created: string;
  episode: [];
  gender: string;
  id: number;
  image: string;
  location: {
    name: string;
    url: string;
  };
  name: string;
  origin: {
    name: string;
    url: string;
  };
  species: string;
  status: string;
  type: string;
  url: string;
}

export interface ButtonProps {
  title: string | number;
  onClick: () => void;
  disabled?: boolean;
  width?: string;
  className?: {};
}
