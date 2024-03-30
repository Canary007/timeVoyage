import { Injectable } from '@angular/core';

export interface EventInterface {
  id: number;
  title: string;
  date: string;
  description: string;
  image: string;
  video: string;
}

@Injectable({
  providedIn: 'root'
})
export class DataService {

  public timeLineData: EventInterface[] = [
    {
      id: 1,
      title: "The Renaissance Begins",
      date: "14th Century",
      description: "The Renaissance period marks the revival of art, culture, and learning in Europe, leading to significant advancements in science, art, and philosophy.",
      image: "assets/renaissance.webp",
      video: "https://www.youtube.com/embed/1"
    },
    {
      id: 2,
      title: "Declaration of Independence",
      date: "1776",
      description: "The Declaration of Independence was adopted by the Continental Congress, declaring the 13 American colonies independent from British rule and laying the foundation for the United States.",
      image: "assets/declaration_of_independence.jpg",
      video: "https://www.youtube.com/embed/1"
    },
    {
      id: 3,
      title: "Fall of the Berlin Wall",
      date: "1989",
      description: "The fall of the Berlin Wall symbolized the end of the Cold War and the reunification of East and West Germany, marking a significant moment in modern history.",
      image: "assets/berlin_wall.jpg",
      video: "https://www.youtube.com/embed/1"
    }
  ];

  constructor() { }
}
