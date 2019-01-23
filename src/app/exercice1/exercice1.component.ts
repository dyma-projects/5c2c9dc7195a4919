import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercice1',
  templateUrl: './exercice1.component.html',
  styleUrls: ['./exercice1.component.css']
})
export class Exercice1Component implements OnInit {
	public monString : string = 'Je m appelle Meriem';
	public lienImage : string = 'https://www.blagues-en-stock.org/_media/img/medium/dessin-humour-informatique-8t.png';
	public hello : string = '';
  constructor() { 
  

  }
  
  ngOnInit() {
  }

  afficherHello(){
  	this.hello = 'Hello';
  }

}
