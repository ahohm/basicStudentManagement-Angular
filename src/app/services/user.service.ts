import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  doLogin(data){
		if (data.email == "admin@admin.com" && data.password == "123456") {
			return {
				code : 200,
				message : "Login Successful",
				data : data
			};
		}else{
			return {
				code : 503,
				message : "Invalid Credentials",
				data : null
			};
		}
	}

	
}
