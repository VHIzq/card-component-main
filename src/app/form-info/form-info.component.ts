import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators} from '@angular/forms'

@Component({
  selector: 'app-form-info',
  templateUrl: './form-info.component.html',
  styleUrls: ['./form-info.component.scss'],
})
export class FormInfoComponent implements OnInit {
  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {}

  sendDetails() {
    const isInvalid: boolean = this.cardForm.invalid;
    if (isInvalid) return;
    console.log('datos enviados', isInvalid);
    this.cardForm.reset();
  }

  validateField(field: string) {
    return (
      this.cardForm.controls[field]?.errors &&
      this.cardForm.controls[field]?.touched
    );
  }

  cardForm = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(3)]],
    number: [
      '',
      [Validators.required, Validators.minLength(16), Validators.maxLength(16)],
      ,
    ],
    month: [
      '',
      [Validators.required, Validators.minLength(2), Validators.maxLength(2)],
    ],
    year: [
      '',
      [Validators.required, Validators.minLength(2), Validators.maxLength(2)],
    ],
    cvc: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(3)]],
  });
}
