import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

@Injectable({
  providedIn: 'root'
})
export class AuthenticateService {

  constructor(private storage: Storage) { }

  loginUser(credentials){
    return new Promise((accept, reject) => {
      this.storage.get("user").then((data) => {
        console.log(data)
      if ( 
        credentials.email == data.email && btoa(credentials.password) == data.password
      ) { 
        accept("Login Correcto");
    } else {
      reject("Login Incorrecto")
    }
      }
      );
      
  }
    );
  }

  registerUser(registerData){
    registerData.password = btoa(registerData.password)
    return this.storage.set("user", registerData)
  }

}
