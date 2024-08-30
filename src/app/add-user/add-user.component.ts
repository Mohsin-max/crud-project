import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent implements OnInit{

  constructor(private service:UserService){}

  checker:any = false
  ngOnInit(): void {

  }

  userDataForm = new FormGroup({

    "name":new FormControl('',[Validators.required,Validators.minLength(4)]),
    "age":new FormControl('',[Validators.required]),
    "salary":new FormControl('',[Validators.required]),
    "image":new FormControl('',[Validators.required]),

  })

  formSubmit(){

    const newdata = {

      ...this.userDataForm.value,
      id:this.generateId()

    }

    this.service.postApi(newdata).subscribe((result)=>{

      if (result) {

        this.checker = true

        setTimeout(() => {
          this.checker = false
        }, 3000);

        this.userDataForm = new FormGroup({

          "name":new FormControl('',[Validators.required,Validators.minLength(4)]),
          "age":new FormControl('',[Validators.required]),
          "salary":new FormControl('',[Validators.required]),
          "image":new FormControl('',[Validators.required])
      
        })
        
      }

    })

  
  }

  generateId(){
    return '_' + Math.random().toString(36).substr(2, 9);
  }


}
