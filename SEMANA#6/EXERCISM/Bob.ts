export function hey(message: string): string {
    // Verificamos si el mensaje es vacío o contiene solo espacios en blanco
    if (!message.trim()) {
      return 'Fine. Be that way!';
    }
  
    // Verificamos si el mensaje es una pregunta
    if (message.trim().endsWith('?')) {
      // Si el mensaje contiene al menos una letra y está en mayúsculas, es una pregunta gritada
      if (message.match(/[a-zA-Z]/) && message === message.toUpperCase()) {
        return "Calm down, I know what I'm doing!";
      }
      // Si es una pregunta y no está gritada, respondemos 'Sure.'
      return 'Sure.';
    }
  
    // Verificamos si el mensaje contiene al menos una letra y está en mayúsculas, es un grito
    if (message.match(/[a-zA-Z]/) && message === message.toUpperCase()) {
      return 'Whoa, chill out!';
    }
  
    // Si no es una pregunta y no está gritando, respondemos 'Whatever.'
    return 'Whatever.';
  }