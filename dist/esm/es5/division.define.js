// division: Custom Elements Define Library, ES Module/ES5 Target
import { defineCustomElement } from './division.core.js';
import {
  DvnCard,
  DvnGallery,
  DvnImage
} from './division.components.js';

export function defineCustomElements(window, opts) {
  defineCustomElement(window, [
    DvnCard,
    DvnGallery,
    DvnImage
  ], opts);
}