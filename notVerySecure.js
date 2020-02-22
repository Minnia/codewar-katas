const alphanumeric = string => {
  const newRegex = new RegExp(/^([0-9]|[a-z])+([0-9a-z]+)$/i);
  if (string.length < 2 || !string || !string.match(newRegex)) {
    return false;
  }
  return true;
};
