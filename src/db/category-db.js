import { v4 as uuid } from "uuid";
import {
  math,
  politics,
  history,
  sports,
  animal,
  gk,
} from "../assets";

export const categories = [
  {
    _id: uuid(),
    name: "Mathmatics",
    image: math,
    link: "https://opentdb.com/api.php?amount=10&category=19&difficulty=medium&type=multiple",
  },
  {
    _id: uuid(),
    name: "Sports",
    image: sports,
    link: "https://opentdb.com/api.php?amount=10&category=21&difficulty=easy&type=multiple",
  },
  {
    _id: uuid(),
    name: "History",
    image: history,
    link: "https://opentdb.com/api.php?amount=10&category=23&difficulty=easy&type=multiple",
  },
  {
    _id: uuid(),
    name: "Politics",
    image: politics,
    link: "https://opentdb.com/api.php?amount=10&category=24&difficulty=medium&type=multiple",
  },
  {
    _id: uuid(),
    name: "Animal",
    image: animal,
    link: "https://opentdb.com/api.php?amount=10&category=27&difficulty=easy&type=multiple",
  },
  {
    _id: uuid(),
    name: "GK",
    image: gk,
    link: "https://opentdb.com/api.php?amount=10&category=9&difficulty=easy&type=multiple",
  },
];
