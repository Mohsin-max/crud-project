import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.scss']
})
export class UpdateUserComponent implements OnInit{

  constructor(private route:ActivatedRoute,private service:UserService){}

  updateUsers:any;

  ngOnInit(): void {
    
    let param = this.route.snapshot.paramMap.get('id');
    
    
    this.service.getApiById(param).subscribe((rs)=>{
      
      this.updateUsers = rs

      console.log(this.updateUsers);
      
      
    })
    
  }
  
  update(){
    
    this.service.updateApi(this.updateUsers.id,this.updateUsers).subscribe((res)=>{

      console.log(res);
      
      
      
    })



  }

}
