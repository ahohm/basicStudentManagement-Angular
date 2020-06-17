import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Student Management By Ahmed HMAIER & Abdo Rahim DAOUDA';

	// Add few students for initial listing
	studentsList = [
	{	
		id : 1,
		first_name : "Abdo RAhim",
		last_name : "Daouda",
		email : "abdorahim@daouda.com",
		phone : 95037331,
		department : "GLSI"
	},
	{
		id : 2,
		first_name : "Ahmed",
		last_name : "Hmayer",
		email : "ahmed@hmayer.com",
		phone : 27119665,
		department : "DSEN"
	},
	{
		id : 3,
		first_name : "Farah",
		last_name : "Ferjani",
		email : "farah@ferjani.com",
		phone : 70506090,
		department : "SSRI"
	}
	];

	constructor() {
		// Save students to localStorage
		localStorage.setItem('students', JSON.stringify(this.studentsList));
	}
}
