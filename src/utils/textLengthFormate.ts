export const textLengthFormate = (text: string, mLength: number) =>
  text.length > mLength ? `${text.slice(0, mLength)}...` : text;
