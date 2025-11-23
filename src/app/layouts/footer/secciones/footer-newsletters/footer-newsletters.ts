import { Component, signal } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';


@Component({
  selector: 'app-footer-newsletters',
  imports: [ReactiveFormsModule],
  templateUrl: './footer-newsletters.html',
  styleUrl: './footer-newsletters.css',
})
export class FooterNewsletters {

  newsLetterForm : FormGroup;

  isSubmit =signal<boolean>(false)
  submitSuccess =signal<boolean>(false)
  submitErrorMessage =signal<string>('')

  constructor(private fb:FormBuilder){
    this.newsLetterForm = this.fb.group({
      email : ['' ,[Validators.required , Validators.email]]
    })

  }

  get emailControl(){
    return this.newsLetterForm.get('email')
  }


  onSubmit(){
    if(this.newsLetterForm.valid){
      this.submitSuccess.set(true)
    }else{
      this.submitErrorMessage.set('Favor Ingresar Email valido')
    }
  }

}
