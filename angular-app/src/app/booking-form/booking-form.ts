import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { JsonPipe } from '@angular/common';
import { ErrorBlock } from '../error-block/error-block';

@Component({
  selector: 'app-booking-form',
  imports: [FormsModule, JsonPipe, ErrorBlock],
  templateUrl: './booking-form.html',
  styleUrl: './booking-form.scss',
})
export class BookingForm {
  FORM_NAME='form'

  formData = {
     name: '',
     phone: '',
  }

  ngOnInit(){
    this.getDataFromLS()
  }

  saveForm(){
    localStorage.setItem(this.FORM_NAME, JSON.stringify(this.formData))
  }

  submitForm(form:NgForm){
    console.log(form.value);
    this.deleteLs()
  }

  changeName(){
    this.formData.name = 'Random'
  }

  showInput(){
    this.saveForm()
  }

  deleteLs(){
    localStorage.removeItem(this.FORM_NAME)
  }

  getDataFromLS(){
    const data = localStorage.getItem(this.FORM_NAME)

    if(data){
      this.formData = JSON.parse(data)
    }
  }
}
