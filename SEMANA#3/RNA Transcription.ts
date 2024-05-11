const decodeGna = (gna:string) => {
    switch (gna) {
      case "G":
        return "C";
      case "C":
        return "G";
  
      case "T":
        return "A";
  
      case "A":
        return "U";
  
      default:
        throw new Error('Invalid input DNA.');
    }
  };
  
  export function toRna(dna:string):string {
     let res = ""
    try {
      for (let i = 0; i < dna.length; i++) {
        res += decodeGna(dna.charAt(i))
      }
    } catch (error:any) {
      throw new Error('Invalid input DNA.');
    }
    return res
  }