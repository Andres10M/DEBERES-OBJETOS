export function decodedResistorValue(colores:string[]) {
    let colorsNum = ["black","brown","red", "orange","yellow", "green", "blue","violet", "grey","white"]
    
    var final:number = colorsNum.indexOf(colores[0])*10+ colorsNum.indexOf(colores[1]);
  
    if(colores[2] != undefined){
      let prefijo = colorsNum.indexOf(colores[2]);
      let prefijoPWord = "";
      if(prefijo < 2){
          //ohms
          prefijoPWord = " ohms";
      }
      else if(prefijo < 6 && prefijo >= 2){
          //Kilo
          prefijoPWord = " kiloohms";
          prefijo = prefijo - 3;
      }
      else if(prefijo < 9 && prefijo >= 6){
          //Mega
          prefijoPWord = " megaohms";
          prefijo = prefijo - 6;
      }
      else{
          //Giga
          prefijoPWord = " gigaohms";
          prefijo = prefijo - 9;
      }
  
  
          final = final * Math.pow(10,prefijo);
      
  
      return final + prefijoPWord;
    }
  
  
    return final;
  }
  