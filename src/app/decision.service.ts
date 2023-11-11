// decision.service.ts

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DecisionService {
   result: any      
  constructor() { }

  // Méthode pour évaluer la décision en fonction de la moyenne
  evaluerDecision(note1: any,note2:any): string {
          let moyenne = (note1+note2)/2
          if (moyenne < 10) {
                    return 'Refusé';
                  } else if (moyenne >= 10 && moyenne < 12) {
                    this.result= 'Admis';
                  } else if (moyenne >= 12 && moyenne < 14) {
                    this.result= 'Admis assez bien';
                  } else if (moyenne >= 14 && moyenne < 16) {
                    this.result= 'Admis bien';
                  } else {
                    this.result= 'Très bien';
                  }
          return this.result; 
                }
  }

