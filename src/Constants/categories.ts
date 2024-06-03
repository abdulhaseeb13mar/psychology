import relation from "../assets/images/relationship.jpg";
import reselience from "../assets/images/reselience.jpg";
import infant from "../assets/images/infant.png";
import childhood from "../assets/images/childhood.png";
import balance from "../assets/images/balance.png";
import time from "../assets/images/time.png";
import academicStress from "../assets/images/academicStress.jpg";
import sleepaid from "../assets/images/sleepaid.png";

export const adultCategories = [
  { id: 1, name: "Relationship Issue", image: relation },
  { id: 2, name: "Resilience", image: reselience },
];

export const parentingCategories = [
  { id: 1, name: "Infant", image: infant },
  { id: 2, name: "Early Childhood", image: childhood },
];

export const professionalCategories = [
  { name: "Time Management", image: time, id: 1 },
  { name: "Work Life Balance", image: balance, id: 2 },
];

export const studentCategories = [
  { id: 1, name: "Academic Stress", image: academicStress },
  { id: 2, name: "Sleep Aid", image: sleepaid },
];
