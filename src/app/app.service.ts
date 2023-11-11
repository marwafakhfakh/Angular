import { Injectable } from '@angular/core';
@Injectable()
export class CalculatorService {
add(a: number, b: number): number {
return a + b;}

multiply(a:number,b:number){
  return a*b;
}
}