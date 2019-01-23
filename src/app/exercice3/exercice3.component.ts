import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercice3',
  templateUrl: './exercice3.component.html',
  styleUrls: ['./exercice3.component.css']
})
export class Exercice3Component implements OnInit {
  public p : string = "P1";
  public statut : boolean = true;
  constructor() { } 

  ngOnInit() {
  }
  changeStatut(){
  	this.statut = !this.statut;
    //this.statut2 = !this.statut
    if (this.statut==true) {
      this.p="P1"
    }
    else{
      this.p="P2"
    }
  }
}
