function toCamelCase(str) {
  return str
    .split(/[-_]+/)
    .reduce(
      (result, current, index) =>
        index === 0
          ? current
          : result +
            current.replace(current.charAt(0), current.charAt(0).toUpperCase()),
      ""
    );
}
