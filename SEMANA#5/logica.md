# Darts

## Problema

Los juegos de dardos son muy populares , un jugador lanza un dardo a un tablero circular y gana puntos según la ubicación donde el dardo golpea. Queremos crear una función que, dado las coordenadas (x, y) donde el dardo golpea, debemos calcular  la cantidad de puntos que el jugador gana.

## Solución

Para resolver este problema, primero calculamos la distancia desde el origen (0, 0) hasta el punto (x, y) utilizando el teorema de Pitágoras. Esto nos da la distancia radial desde el origen hasta el punto donde el dardo golpea.

Luego, evaluamos esta distancia r para determinar la cantidad de puntos ganados. Si la distancia es mayor que 10 unidades, el dardo está fuera del círculo exterior y no se gana ningún punto. Si la distancia es mayor que 5 pero menor o igual a 10 unidades, el dardo está dentro del círculo exterior y se gana 1 punto. Si la distancia es mayor que 1 pero menor o igual a 5 unidades, el dardo está dentro del círculo medio y se gana 5 puntos. Si la distancia es menor o igual a 1 unidad, el dardo está en el círculo central y se ganan 10 puntos.

Con esta solución, podemos calcular fácilmente la cantidad de puntos ganados en el juego de dardos dado las coordenadas donde el dardo golpea.

# Pangram

## Problema

Un pangrama es una oración que contiene cada letra del alfabeto al menos una vez. Por ejemplo, "The quick brown fox jumps over the lazy dog" es un pangrama, ya que contiene todas las letras del alfabeto inglés.

Queremos crear una función que determine si una oración dada es un pangrama o no. Esta función debe analizar la oración y verificar si contiene al menos una vez cada una de las 26 letras del alfabeto inglés, ignorando mayúsculas y minúsculas.

## Solución

Para resolver este problema, primero creamos un conjunto (Set) llamado alphabet para almacenar las letras del alfabeto encontradas en la oración.

Luego, iteramos sobre cada carácter de la oración. Verificamos si el carácter es una letra del alfabeto utilizando una expresión regular que coincida con [a-zA-Z]. Si es una letra, la convertimos a minúscula y la agregamos al conjunto alphabet.

Después de agregar cada letra, verificamos si el tamaño del conjunto alphabet es igual o mayor que 26. Si lo es, significa que hemos encontrado al menos una vez cada una de las 26 letras del alfabeto y, por lo tanto, la oración es un pangrama, por lo que devolvemos true.

Si terminamos de iterar sobre la oración y no encontramos al menos 26 letras diferentes en el conjunto alphabet, entonces devolvemos false, indicando que la oración no es un pangrama.

Con esta solución, podemos determinar fácilmente si una oración dada es un pangrama o no, lo que puede ser útil en diversas aplicaciones, como juegos de palabras.

### Link del video

https://www.youtube.com/watch?v=AsckPIxfYLg

