import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  hide: boolean = true;
  registerForm!: FormGroup;

  constructor(
    private formBuilderLogin: FormBuilder,
    private formBuilderRegister: FormBuilder,
    private router: Router,
    private snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
    localStorage.clear();
    this.loadForm();
    this.loadFormRegister();
    document.addEventListener('DOMContentLoaded', () => {
      const container = document.getElementById('container');
      const registerBtn = document.getElementById('register');
      const loginBtn = document.getElementById('login');
      const registerUserButton = document.getElementById('registerUserButton');
      if (registerBtn) {
        registerBtn.addEventListener('click', () => {
          if (container) {
            container.classList.add("active");
          }
        });
      }

      if (registerUserButton) {
        registerUserButton.addEventListener('click', () => {
          if (container) {
            container.classList.add("active");
          }
        });
      }

      if (loginBtn) {
        loginBtn.addEventListener('click', () => {
          if (container) {
            container.classList.remove("active");
          }
        });
      }
    });
  }

  loadForm() {
    this.loginForm = this.formBuilderLogin.group({
      userName: ["", [Validators.required, Validators.maxLength(20), Validators.minLength(4)]],
      password: ["", [Validators.required, Validators.maxLength(20), Validators.minLength(4)]]
    });
  }

  loginUser() {
    const user = {
      userName: this.loginForm.get("userName")!.value,
      password: this.loginForm.get("password")!.value
    };

    // Aquí puedes manejar el proceso de inicio de sesión

    this.snackBar.open('Usuario autenticado con éxito', 'Cerrar', {
      duration: 2000,
    });

    this.router.navigate(['/home']);
  }

  cancel() {
    this.router.navigate(['/home']);
  }

  loadFormRegister() {
    this.registerForm = this.formBuilderRegister.group({
      userType: ["", [Validators.required]],
      firstName: ["", [Validators.required]],
      lastName: ["", [Validators.required]],
      email: ["", [Validators.required, Validators.email]],
      phone: ["", [Validators.required, Validators.pattern('^[0-9]{10}$')]],
      username: ["", [Validators.required, Validators.maxLength(20), Validators.minLength(4)]],
      password: ["", [Validators.required, Validators.maxLength(20), Validators.minLength(4)]]
    });
  }

  registerUser() {
    const user_register = {
      userType: this.registerForm.get("userType")!.value,
      firstName: this.registerForm.get("firstName")!.value,
      lastName: this.registerForm.get("lastName")!.value,
      email: this.registerForm.get("email")!.value,
      phone: this.registerForm.get("phone")!.value,
      username: this.registerForm.get("username")!.value,
      password: this.registerForm.get("password")!.value
    };

    // Aquí puedes manejar el proceso de registro

    this.snackBar.open('Usuario registrado con éxito', 'Cerrar', {
      duration: 2000,
    });

    this.registerForm.reset();
  }

  cancelar() {
    this.router.navigate(['/home']).then(() => {
      window.location.reload();
    });
  }
}
