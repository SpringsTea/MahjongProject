import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service'


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
	name:string = 'Steve Smith';
	age:number;
	email:string;
	address:Address
	hobbies:string[];//any[]
	posts:Post[];

  constructor(private dataService:DataService) { 
  	console.log('constructor ran...');


  }

  ngOnInit() {
  	console.log('ngOnInit ran...');

  	this.name = 'John Doe';
  	this.email = 'anyemail@email.com'
  	this.age = 30;
  	this.address = {
  		street:'50 Main street',
  		city: 'Boston',
  		state: 'MA'
  	};
  	this.hobbies = ['Write code', 'Watch movies', 'Listen to tunes'];

  	this.dataService.getPosts().subscribe((posts) => {
  		//console.log(posts);
  		this.posts = posts;
  	});
  }

  onClick(){
  	this.addHobby('Clicking  Buttons');
  }

  addHobby(hobby){
  	this.hobbies.push(hobby);

  	return false;
  }

  deleteHobby(hobby){
  	for(let i = 0; i < this.hobbies.length; i++){
  		if (this.hobbies[i] == hobby){
  			this.hobbies.splice(i,1);
  		}
  	}
  }

}

interface Address{
	street:string,
	city:string,
	state:string
}

interface Post{
	id: number,
	title: string,
	body: string,
	userID: number
}
