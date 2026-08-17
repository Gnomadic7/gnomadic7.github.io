import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AccommodationsDataService } from '../services/accommodations-data.service';
import { Accommodations } from '../models/accommodations';

@Component({
  selector: 'app-edit-accommodations',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './edit-accommodations.component.html',
  styleUrl: './edit-accommodations.component.css'
})
export class EditAccommodationsComponent implements OnInit{

  public editForm!: FormGroup;
  accommodation! : Accommodations;
  submitted = false;
  message : string = '';

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private accommodationsDataService: AccommodationsDataService
  ) {}

  ngOnInit() : void{

    //Retrieve stashed accommodations ID
    let roomCode = localStorage.getItem("roomCode");
    if (!roomCode) {
      alert("Something wrong, coudlnt find newsCode stash");
      this.router.navigate(['']);
      return;
    }

    console.log('EditAccommodationsComponent::ngOnInit');
    console.log('roomCode:' + roomCode);

    this.editForm = this.formBuilder.group({
      _id: [],
      code: ['', Validators.required],
      name: ['', Validators.required],
      image: ['', Validators.required],
      description: ['', Validators.required],
      rate: ['', Validators.required]
    })

    this.accommodationsDataService.getAccommodation(roomCode)
      .subscribe({
        next: (value: any) => {
          this.accommodation = value;
          //Populate our record into the form
          this.editForm.patchValue(value[0]);
          if(!value)
          {
            this.message = 'No Accommodation Retrieved';
          }
          else{
            this.message = 'Accommodation: ' + roomCode + ' retrieved';
          }
          console.log(this.message);
        },
        error: (error: any) => {
          console.log('Error: ' + error);
        }
      })
  }

  public onSubmit() {
    this.submitted = true;

    if(this.editForm.valid)
    {
      this.accommodationsDataService.updateAccommodations(this.editForm.value)
      .subscribe({
        next: (value: any) => {
          console.log(value);
          this.router.navigate(['']);
        },
        error: (error: any) => {
          console.log('Error: ' + error);
        }
      })
    }
  }
  //get the form short name to access the form fields
  get f() { return this.editForm.controls; }

}
