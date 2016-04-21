const pluralize = (n, thing) => {
  // fairly stupid pluralizer
  if (n === 1) {
    return `1 ${thing}`;
  }

  return `${n} ${thing}s`;
};

export default pluralize;
