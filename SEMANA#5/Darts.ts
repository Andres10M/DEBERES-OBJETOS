export const score = (x: number, y: number) => {
    const r = Math.sqrt(x*x + y*y)
    if (r > 10 )
      return 0
    if (r > 5 )
      return 1
    if (r > 1 )
      return 5
    return 10
  };