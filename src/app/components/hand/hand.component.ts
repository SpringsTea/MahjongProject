import { Component, OnInit } from '@angular/core';
import { TileComponent } from '../tile/tile.component';

@Component({
  selector: 'app-hand',
  templateUrl: './hand.component.html',
  styleUrls: ['./hand.component.css']
})
export class HandComponent implements OnInit {
tiles:TileComponent[] = [];
draw:TileComponent = null;

  constructor() {
  	//Fill hand with 13 tiles
  	Array.from(Array(12)).forEach((x, i) => {
	 this.tiles.push( new TileComponent() );
	});

	this.draw = new TileComponent();
  	
  }

  ngOnInit() {
  }

}
