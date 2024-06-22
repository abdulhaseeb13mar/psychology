import relation from "../assets/images/relationship.jpg";
import reselience from "../assets/images/reselience.jpg";
import infant from "../assets/images/infant.png";
import childhood from "../assets/images/childhood.png";
import balance from "../assets/images/balance.png";
import time from "../assets/images/time.png";
import academicStress from "../assets/images/academicStress.jpg";
import sleepaid from "../assets/images/sleepaid.png";
import earlychildhood from "../assets/images/eaarly2.jpg";

export const adultCategories = [
  { id: 1, name: "رومانوی تعلوقات", image: relation },
  { id: 2, name: "Resilience", image: reselience },
];

export const parentingCategories = [
  { id: 1, name: "نومولود کی پرورش", image: infant },
  { id: 2, name: "ابتدائی بچپن", image: earlychildhood },
  { id: 3, name: "ابتدائی بچپن", image: earlychildhood },
];

export const professionalCategories = [
  { name: "پابندی وقت", image: time, id: 1 },
  { name: "کام اور زندگی کا توازن", image: balance, id: 2 },
];

export const studentCategories = [
  { id: 1, name: "تعلیمی تناؤ", image: academicStress },
  { id: 2, name: "Sleep Aid", image: sleepaid },
];
