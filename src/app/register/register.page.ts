import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NavController } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { AuthenticateService } from '../services/authenticate.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  registerForm: FormGroup;
  errorMessage: string = "";
  validation_messages = {
    nombre: [
      { type: "required", message: "El nombre es obligatorio!" },
      { type: "minlength", message: "El nombre debe tener minimo 3 caracteres" },
      { type: "maxlength", message: "El nombre debe tener maximo 20 caracteres" }
    ],
    apellido: [
      { type: "required", message: "El apellido es obligatorio!" },
      { type: "minlength", message: "El apellido debe tener minimo 3 caracteres" },
      { type: "maxlength", message: "El apellido debe tener maximo 20 caracteres" }
    ],
    email: [
      { type: "required", message: "El correo es obligatorio!" },
      { type: "pattern", message: "Correo invalido, reviselo!" },
      { type: "maxlength", message: "El correo debe tener maximo 50 caracteres" }
    ],
    password: [
      { type: "required", message: "Por Favor ingrese una Contraseña!"},
      { type: "minlength", message: "La contraseña debe tener minimo 5 caracteres!" },
      { type: "maxlength", message: "La contraseña debe tener maximo 20 caracteres" }
    ]
  }
  constructor(private formBuilder: FormBuilder, private navCtrl: NavController, private storage: Storage,private authService: AuthenticateService) {
    this.storage.create();
    this.registerForm = this.formBuilder.group({
      email: new FormControl(
        "",
        Validators.compose([
          Validators.required,
          Validators.pattern("^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-]+$"),
          Validators.maxLength(50)
        ])
      ),
      password: new FormControl(
        "",
        Validators.compose([
          Validators.required,
          Validators.minLength(5),
          Validators.maxLength(20)
        ])
      ),
      nombre: new FormControl(
        "",
        Validators.compose([
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(20)
        ])
      ),
      apellido: new FormControl(
        "",
        Validators.compose([
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(20)
        ])
      )
    });
   }

  ngOnInit() {
  }

  register(registerData){
    
    this.authService.registerUser(registerData).then(()=> {
      this.navCtrl.navigateBack("/login");
    } );
  }

  goToLogin(){
    this.navCtrl.navigateBack("/login")
  }
}
