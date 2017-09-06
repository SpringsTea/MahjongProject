import { Component, OnInit } from '@angular/core';
import { TileComponent } from '../tile/tile.component';
import { Tile } from '../../interfaces/tile';

@Component({
  selector: 'app-hand',
  templateUrl: './hand.component.html',
  styleUrls: ['./hand.component.css']
})
export class HandComponent implements OnInit {
tiles:Tile[] = [];
draw:Tile = null;
default = {
	suit:'bamboo', number: 1
}

  constructor() {
  	//Fill hand with 13 tiles
  	Array.from(Array(12)).forEach((x, i) => {
	 this.tiles.push( Object.create(this.default) );//If I don't declare as a new object, all components will be bound to the same object
	});

	this.draw = Object.create(this.default);
  	
  }

  ngOnInit() {
  }

}
