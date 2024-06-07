const textShortener = (text: string, textLimit: number) => {
  return text.length <= textLimit ? text : `${text.slice(0, textLimit)}...`;
};

export default textShortener;
