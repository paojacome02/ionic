import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { LogInRequest} from '../model/login.model';
import {LoginService} from '../services/login.service';
import {Router} from '@angular/router/';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  
  formLogin: FormGroup;

  constructor(private formBuilder: FormBuilder,private loginService: LoginService,private router:Router){ 
    this.formLogin = this.formBuilder.group({
      email:['',Validators.required, Validators.email],
      password: ['',[Validators.required, Validators.minLength(3)]]
    });
  }
    
  ngOnInit() {
  }

  logInClick(){
    const data = new LogInRequest();
    data.email = this.formLogin.get('email').value;
    data.password = this.formLogin.get('password').value;

    this.loginService.login(data).subscribe(res => {
      if(res.token){
        this.router.navigate(['home']);
      }else{
        alert('datos invalidos');
      }},err =>{
        console.log(err);
        alert('datos inválidos');
      });
  }
}
