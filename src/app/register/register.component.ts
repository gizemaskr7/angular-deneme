import { Component, OnInit,Output,EventEmitter , Input} from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  
  
  @Output() data: EventEmitter<any>=new EventEmitter();
  @Input() login: string = "";
  ngOnInit(): void {
    this.data.emit("registerdan gelen veri");

  }
  registerForm: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder) {
    this.registerForm = this.formBuilder.group({
      name: ['', Validators.required],
      surname: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      password1: ['', [Validators.required, Validators.minLength(8)]]
      
    });
  }

  onSubmit() {
    this.submitted = true;

    if (this.registerForm.valid) {
  
      console.log("Kayıt Formu Verileri:");
      console.log("Ad:", this.registerForm.value.name);
      console.log("Soyad:", this.registerForm.value.surname);
      console.log("E-posta:", this.registerForm.value.email);
      console.log("Şifre:", this.registerForm.value.password);
      console.log("Şifre Tekrar:", this.registerForm.value.password1);

    }
  }
  
}
