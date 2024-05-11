# LEAP
## Problema 
 
 En este problema, se solicita determinar si un año dado es bisiesto o no. Un año es considerado bisiesto si es divisible por 4, excepto en el caso de los años que son divisibles por 100 pero no por 400.

 ## Solucion 

 Bueno, para hacer esto, primero necesitamos una función que convierta cada letra de ADN en su correspondiente en ARN, ¿verdad? Así que escribí una función llamada decodeGna. Básicamente, si le doy una letra de ADN, me devuelve la letra de ARN que le corresponde. Por ejemplo, si le doy una "G", me devuelve una "C", y así sucesivamente. Si le doy algo que no es ninguna de esas letras, como un número o una letra rara, simplemente me dice que es una entrada de ADN inválida.

Después de eso, necesitaba una función que tomara toda una cadena de ADN y la convirtiera completamente en ARN. Así que escribí otra función llamada toRna. Esta función básicamente recorre cada letra de mi cadena de ADN, le aplica la función decodeGna que escribí antes, y agrega la letra de ARN correspondiente a una nueva cadena. Si por casualidad encuentro una letra que no es válida, como un número o una letra extraña, simplemente la ignoro y termino con un error, diciendo que la entrada de ADN no es válida.

Y eso es básicamente todo! Ahora, cada vez que necesite transcribir una cadena de ADN a ARN, simplemente uso mi función toRna y listo.

#  RNA Transcription 

## Problema

Tengo una cadena de ADN, pero necesito convertirla en ARN. En el ADN, las letras son A, C, G y T, mientras que en el ARN, las letras son A, C, G y U. Necesito una función que tome una cadena de ADN y la convierta en ARN.

## Solución

Para resolver este problema, desarrollé una función llamada toRna. Lo que hace esta función es bastante simple pero efectivo. Recorre cada letra de la cadena de ADN proporcionada y llama a una función auxiliar llamada decodeGna para obtener el equivalente en ARN de cada letra. La función decodeGna simplemente mapea cada letra de ADN a su correspondiente en ARN utilizando un switch. Sin embargo, si encuentra una letra que no es válida, como un número o una letra extraña, lanza una excepción indicando que la entrada de ADN no es válida.

Entonces, con esta solución, puedo transcribir fácilmente cualquier cadena de ADN a ARN sin preocuparme por letras no válidas o errores en el proceso de transcripción. ¡Es una forma rápida y confiable de hacer la conversión

### Link del video

https://www.youtube.com/watch?v=AzI4RR_Vys8