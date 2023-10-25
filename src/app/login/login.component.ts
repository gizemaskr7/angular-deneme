import { Component, Input,Output,EventEmitter ,OnInit} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  @Input() data: string = "";
  @Output() login: EventEmitter<any>=new EventEmitter();
  ngOnInit(): void {
    this.login.emit("loginden gelen veri");
  }
  selectedLoginType: string = '';

  loginForm: FormGroup;
  submitted = false;


  constructor(private formBuilder: FormBuilder) {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]
    });
  }

  onSubmit() {
    this.submitted = true;

    if (this.loginForm.valid) {
      console.log("giriş yapıldı.")
    } else {
      console.log("giriş başarısız.")

    }
  }
}
