function alphabetPosition(text) {
  const validate = "qwertyuioplkjhgfdsazxcvbnm";
  return text
    .split("")
    .reduce((result, current) => {
      if (current !== " " && validate.includes(current.toLowerCase())) {
        result.push(current.toLowerCase().charCodeAt() - 96);
      }
      return result;
    }, [])
    .join(" ");
}
