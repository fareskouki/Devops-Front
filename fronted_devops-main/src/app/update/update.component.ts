import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { blocService } from '../bloc.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

  id: any;
  bloc: any = {};

  constructor(private route: ActivatedRoute, private blocService: blocService, private router: Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id']; // Get the id from the route parameters
    // Fetch existing data using the id
    this.blocService.getById(this.id)
       .subscribe(data => {
         this.bloc = data;
       });
  }
  updatebloc(): void {
    // Implement your logic to update bloc here
    console.log(this.bloc); // Log the form data for testing
    // Example: Call a service method to update bloc
    this.blocService.update(this.id, this.bloc)
      .subscribe(updatedbloc => {
        // Assuming the server returns the updated bloc object
        console.log('Updated bloc:', updatedbloc);
        // Optionally, update the local bloc object with the updated data
        this.bloc = updatedbloc;
        // Navigate back to the read page after updating
        this.router.navigate(['/read']);
      }, error => {
        // Handle errors if any
        console.error('Error updating bloc:', error);
      });
  }
  
}