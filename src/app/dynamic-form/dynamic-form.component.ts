import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.css']
})
export class DynamicFormComponent implements OnInit {
  createpatientForm() {
    return this.fb.group({
      patient_name : [null,[Validators.required]],
      patient_disease : [null,[Validators.required]]
    })
  }
  private frm : FormGroup
  constructor( private fb : FormBuilder) { }

  ngOnInit() {
    this.frm = this.fb.group({
      first_name : [null,[Validators.required, Validators.minLength(2)]],
      department : [null, Validators.required],
      patients : this.fb.array([this.createpatientForm()])
    })
  }

  addPatient(){
    var controls = this.frm.get('patients') as FormArray;
    controls.push(this.createpatientForm())
  }

  delPatientform(index){
    var controls = this.frm.get('patients') as FormArray;
    controls.removeAt(index)
  }
  
}
