import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private service: UserService) { }

  allUsersData:any[]=[];

  ngOnInit(): void {

    this.getData();


  }

  getData(){

    this.service.getApi()
    .pipe(map((response) => {

      let userArray: any[] = [];
      for (let key in response) {

        if (response.hasOwnProperty(key)) {

          userArray.push({ userid: key, ...response[key] })

        }
      }
      return userArray

    }))
    .subscribe((result) => {

      this.allUsersData = result

    })


  }

  delete(id:any){

    this.service.deleteApi(id).subscribe((result)=>{

      if (confirm("are you sure want to delete")) {
        this.getData();
      }
      

    })
    

  }

}
