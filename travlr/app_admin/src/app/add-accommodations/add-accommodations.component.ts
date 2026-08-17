import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AccommodationsDataService } from '../services/accommodations-data.service';

@Component({
  selector: 'app-add-accommodations',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './add-accommodations.component.html',
  styleUrl: './add-accommodations.component.css'
})
export class AddAccommodationsComponent implements OnInit {
  addForm!: FormGroup;
  submitted = false;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private accommodationsService: AccommodationsDataService
  ) { }

  ngOnInit() {
    this.addForm = this.formBuilder.group({
      _id: [],
      code: ['', Validators.required],
      name: ['', Validators.required],
      image: ['', Validators.required],
      description: ['', Validators.required],
      rate: ['', Validators.required]
    })
  }

  public onSubmit() {
    this.submitted = true;
    if (this.addForm.valid) {
      this.accommodationsService.addAccommodations(this.addForm.value)
      .subscribe( {
        next: (data: any) => {
          console.log(data);
          this.router.navigate(['']);
        },
        error: (error: any) => {
          console.log('Error: ' + error);
        }});
      }
    }
    // get the form short name to access the form controls
    get f() { return this.addForm.controls; }
}
