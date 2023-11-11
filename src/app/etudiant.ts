// etudiant-form.component.ts

import { Component, Injectable, NgModule } from '@angular/core';
@Injectable()
@NgModule()
export class EtudiantModule {
    nom: any;
    prenom:  any;
    note1: any;
    note2: any;

//   onNomChange(): void {
//     this.etudiant.nom = this.etudiant.nom.toUpperCase();
//   }

//   onSubmit(): void {
//     // Logique pour traiter le formulaire ici
//     console.log('Formulaire soumis', this.etudiant);
//   }
}