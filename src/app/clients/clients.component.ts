import { Component } from '@angular/core';
import { Student } from './Student';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})
export class ClientsComponent {
	students: Student[] = [];
  formGroupStudent: FormGroup;

  constructor(private formBuilder: FormBuilder){
	
  this.formGroupStudent = formBuilder.group({
    id : [''],
    name: [''],
    course: ['']


  });
}

  save(){
    alert(this.formGroupStudent.value)
  }
}
