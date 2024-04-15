import { Component, OnInit } from '@angular/core';

import { blocService } from '../bloc.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent {

  bloc: any = {}; // Define a generic object to store form data

  constructor(private blocService: blocService, private router: Router) { }

  addbloc(): void {
    // Assign the value of numerobloc from the input field to bloc object
    this.bloc.numerobloc = this.bloc.numbloc; // assuming 'numbloc' is the name of your input field
  
    // Log the data for testing
    console.log(this.bloc);
  
    // Call the service method to create data
    this.blocService.add(this.bloc)
      .subscribe(() => {
        this.router.navigate(['/read']); // Navigate back to the read page after creation
      });
  }
  
}
