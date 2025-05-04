export const getValue = (value: string) => {
  switch (value) {
    case "beginner":
      return 1;
    case "novice":
      return 2;
    case "intermediate":
      return 3;
    case "advanced":
      return 4
    case "proficient":
      return 5;
    default:
      return 0;
  }
};
export const getShadow = (value: string) => {
  switch (value) {
    case "beginner":
      return "shadow-red-400/30";
    case "novice":
      return "shadow-amber-400/30";
    case "intermediate":
      return "shadow-amber-200/30";
    case "advanced":
      return "shadow-emerald-400/30";
    case "proficient":
      return "shadow-sky-400/30";
    default:
      return "shadow-red-400/30";
  }
};
export const getColor = (value: string) => {
  switch (value) {
    case "beginner":
      return "bg-red-500";
    case "novice":
      return "bg-amber-500";
    case "intermediate":
      return "bg-amber-300";
    case "advanced":
      return "bg-emerald-500";
    case "proficient":
      return "bg-sky-500";
    default:
      return "bg-red-500";
  }
};
