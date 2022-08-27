export const textLengthFormate = (text: string) =>
  text.length > 179 ? `${text.slice(0, 120)}...` : text;
