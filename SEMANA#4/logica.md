# Space Age

## Problema

El ejercicio nos pide calcular cuántos años tendrías si vivieras en otro planeta del sistema solar. Cada planeta tiene un período orbital diferente, lo que significa que un año en Marte, por ejemplo, es más largo que un año en la Tierra. Dada una cantidad de segundos y un planeta específico, necesitamos una función que calcule tu edad en años terrestres para ese planeta.

## Solucion 


Para resolver este problema, primero necesitamos convertir la cantidad de segundos proporcionados en años terrestres. Hacemos esto dividiendo la cantidad de segundos por la cantidad de segundos en un año terrestre (que son 60 segundos * 60 minutos * 24 horas * 365.25 días), lo que nos da la duración del año en años terrestres.

Después, definimos un objeto llamado planetOrbitalPeriod, que contiene los períodos orbitales relativos de cada planeta con respecto a la Tierra.

Luego, calculamos la edad en años terrestres para el planeta especificado dividiendo la cantidad de años terrestres por el período orbital del planeta dado.

Finalmente, redondeamos el resultado a dos decimales para obtener una respuesta más precisa y devolvemos la edad calculada en años para el planeta dado.

Con esta solución, podemos fácilmente calcular la edad de una persona en años terrestres para cualquier planeta del sistema solar. Es una forma efectiva de calcular la edad en diferentes planetas y proporciona una respuesta precisa y fácil de entender


# Dungeons & Dragons 

## Problema

En el mundo del juego de rol Dungeons & Dragons (D&D),oh como yo le digo caalabozos y dragones, cada personaje tiene seis atributos principales: Fuerza, Destreza, Constitución, Inteligencia, Sabiduría y Carisma. Para crear un nuevo personaje, necesitamos una clase que genere estos atributos de manera aleatoria y también calcule los puntos de golpe (hitpoints) basados en la Constitución del personaje.En  pocas palabras crear un nuevo personaje con las cualidades que nos pide.

## Solucion 

Para resolver este problema, creamos una clase llamada DnDCharacter. En el constructor de esta clase, generamos valores aleatorios para los seis atributos principales del personaje (Fuerza, Destreza, Constitución, Inteligencia, Sabiduría y Carisma) utilizando el método estático generateAbilityScore. Luego, calculamos los puntos de golpe del personaje basados en su Constitución utilizando el método estático getModifierFor.

El método generateAbilityScore utiliza una técnica de dados de D&D, donde lanzamos cuatro dados de seis caras y descartamos el valor más bajo. Luego, sumamos los tres valores más altos para obtener un valor de atributo.

El método getModifierFor calcula el modificador de un atributo, que se utiliza en diversos cálculos del juego. Este modificador se obtiene restando 10 del valor del atributo, dividiendo el resultado por 2 y redondeando hacia abajo.

Con esta solución, podemos crear fácilmente nuevos personajes para el juego de rol D&D con atributos aleatorios y puntos de golpe calculados automáticamente.


### link del video

https://www.youtube.com/watch?v=Ljb1WSYWIkg


