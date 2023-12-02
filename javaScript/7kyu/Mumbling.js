function accum(s) {
  return s.split("").reduce(
    (result, current, index) => {
      const connect = index === 0 ? "" : "-";
      return (
        result +
        connect +
        current.toUpperCase() +
        current.toLowerCase().repeat(index)
      );
    },

    ""
  );
}
