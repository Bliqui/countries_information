export const formateDate = (receivedDate: string) => {
  const transofrmedDate = new Date(receivedDate);
  return new Intl.DateTimeFormat("en-US", {
    dateStyle: "full",
    timeStyle: "long",
  }).format(transofrmedDate);
};
