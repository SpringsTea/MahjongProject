import { Component, OnInit, Input } from '@angular/core';
import { Tile } from '../../interfaces/tile';

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

  }

  incrementTile( val ){
  	if( val >= 9 ){
  		return 1;
  	}

  	else{
  		return val+1;
  	}
  }

}