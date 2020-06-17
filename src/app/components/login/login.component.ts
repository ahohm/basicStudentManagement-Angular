import { Component, OnInit } from '@angular/core';
import {Validators, FormBuilder, FormGroup } from '@angular/forms';
import { RouterModule, Routes ,Router} from '@angular/router';
import { ValidationService } from '../../services/config.service';
import { UserService } from '../../services/user.service';
import { routerTransition } from '../../services/config.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  animations: [routerTransition()],
 	host: {'[@routerTransition]': ''}
})
export class LoginComponent implements OnInit {

  private loginForm : FormGroup;
	constructor(private formBuilder: FormBuilder,private router: Router, private userService:UserService) { 
		this.loginForm = this.formBuilder.group({
			email: ['',  [Validators.required, ValidationService.emailValidator]],
			password: ['',[Validators.required, ValidationService.passwordValidator]]
		});
	}

	// Check if user already logged in
	ngOnInit() {
		if(localStorage.getItem('userData')) {
			this.router.navigate(['/']);
		}
	}

	// Initicate login
	doLogin(){
		let login = this.userService.doLogin(this.loginForm.value);
		this.success(login);
	}

	// Login success function
	success(data){
			localStorage.setItem('userData', JSON.stringify(data.data));
			this.router.navigate(['/']);
		
	}

}
