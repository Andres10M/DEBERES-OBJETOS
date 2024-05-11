export function age(planet: string, seconds: number): number {

    const earthYear = seconds as number / 60 / 60 / 24 / 365.25;
  
    const planetOrbitalPeriod = {
      mercury: 0.2408467,
      venus: 0.61519726,
      earth: 1.0,
      mars: 1.8808158,
      jupiter: 11.862615,
      saturn: 29.447498,
      uranus: 84.016846,
      neptune: 164.79132,
    }
    
    const result = earthYear / planetOrbitalPeriod[planet as keyof typeof planetOrbitalPeriod];
  
    return Math.round(result * 100) / 100;
  
  
  }