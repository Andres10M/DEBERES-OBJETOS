export function decodedValue(input: string[]) {
    const colors = [
      "black",
      "brown",
      "red",
      "orange",
      "yellow",
      "green",
      "blue",
      "violet",
      "grey",
      "white",
    ];
    
    return(parseInt(`${colors.indexOf(input[0])}${colors.indexOf(input[1])}`));
    }