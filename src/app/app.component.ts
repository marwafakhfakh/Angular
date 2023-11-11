import { Component } from '@angular/core';
import { CalculatorService } from './app.service';
import { DecisionService } from './decision.service';
import { EtudiantModule } from './etudiant';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // result:number;
  // result2:number;
  a:number =5;
  b:number = 3;
  decision: string = "";
  average!:number;
  isNotvalidate: boolean = false;
  etudiantModule = new EtudiantModule();
etudiant: any;
  constructor(private calcService:CalculatorService, private decisionService: DecisionService)
  {
    /*this.result = this.calcService.add(this.a,this.b);
    this.result2 = this.calcService.multiply(this.a,this.b);
    const average = 15; // Remplacez cette valeur par la moyenne réelle
    this.decision = this.decisionService.evaluerDecision(average);
    */
  }

  onAverageChange(): void {
    if (this.average < 0 || this.average > 20) {
      this.isNotvalidate = true;
    } else {
      console.log(this.etudiantModule.note1)
      console.log(this.etudiantModule.note1)
      this.decision = this.decisionService.evaluerDecision(this.etudiantModule.note1,this.etudiantModule.note2);
      this.isNotvalidate = false;
    }
  }

}
