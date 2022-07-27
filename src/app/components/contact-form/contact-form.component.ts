import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, FormGroupDirective, Validators} from '@angular/forms';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent implements OnInit {
  form!: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      name: [null, [Validators.required, Validators.minLength(3)]],
      company: [null, [Validators.required, Validators.minLength(3)]],
      phone: [null, [Validators.required, Validators.minLength(10), Validators.pattern('')]],
      email: [null, [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]],
      message: [null, [Validators.required, Validators.minLength(10)]]
    });
  }

  public scrollTo(component: string): void {
    window.location.hash = component;
  }

  public saveDetails(form: FormGroup, formId:  FormGroupDirective) {
    console.log(form.value);
    formId.resetForm();
    this.form.reset();

  }

  public inputChecker(event: any) {
    const pattern = /[0-9\+\-\ ]/;
    let input = String.fromCharCode(event.charCode);
    if (event.keyCode != 8 && !pattern.test(input)) {
      event.preventDefault();
    }
  }
}
