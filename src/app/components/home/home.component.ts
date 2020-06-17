import { Component, OnInit } from '@angular/core';
import { RouterModule, Routes ,Router} from '@angular/router';

// Components
import { ListComponent } from '../student/list/list.component';
import { DetailsComponent } from '../student/details/details.component';
import { AddComponent } from '../student/add/add.component';

// Services
import { routerTransition } from '../../services/config.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [routerTransition()],
  host: {'[@routerTransition]': ''}
})
export class HomeComponent implements OnInit {

  active:string;
 	constructor(private router: Router) {
 		
 	}

 	ngOnInit() {
 	}

 	
 	logOut(){
 		localStorage.removeItem('userData');
 		this.router.navigate(['/login']);
 	}

}


export const homeChildRoutes : Routes = [
	{
		path: '',
		component: ListComponent
	},
	{
		path: 'add',
		component: AddComponent
	},
	{
		path: 'update/:id',
		component: AddComponent
	},
	{
		path: 'detail/:id',
		component: DetailsComponent
	}
	];