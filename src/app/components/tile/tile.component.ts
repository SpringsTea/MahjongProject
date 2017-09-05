import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-tile',
  templateUrl: './tile.component.html',
  styleUrls: ['./tile.component.css']
})
export class TileComponent implements OnInit {

  constructor() {

  }

  @Input()
  tile: Tile;

  ngOnInit() {
  	this.tile.number = 1;
  	this.tile.suit = 'bamboo';
  }

  changeNumber( num ){
  	this.tile.number = num;
  	console.log(num);
  }


}

interface Tile{
	suit:string;
	number:number;
}
