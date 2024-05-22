export class Matrix {
  content : string;
  constructor(content : string) {
    this.content = content;
  }

  get rows(): number[][] {
    const row_list = this.content.split("\n");
    if(row_list.length <=1){
      return [row_list.map(j=>Number(j))]
    }
    else{
      let res: number[][] = []
      for(let i=0;i<row_list.length ;i++){  
        res=res.concat([row_list[i].split(" ").map(j=>Number(j))]);
      }
      return res;
    }
    
  }

  get columns(): number[][] {
    const rows = this.rows;
    if (rows.length == 0) return [];
    const numColumns = rows[0].length;
    let columns: number[][] = Array.from({ length: numColumns }, () => []);
    console.log(columns);

    for (let i = 0; i < rows.length; i++) {
      for (let j = 0; j < numColumns; j++) {
        columns[j].push(rows[i][j]);
      }
    }
    return columns ;
  }

}