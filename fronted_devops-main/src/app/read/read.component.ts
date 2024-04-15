import { Component, OnInit } from '@angular/core';
import { blocService } from '../bloc.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-read',
  templateUrl: './read.component.html',
  styleUrls: ['./read.component.css']
})
export class ReadComponent implements OnInit {
  blocs: any[] = [];

  constructor(private blocService: blocService, private router: Router) { }

  ngOnInit(): void {
    this.getAll();
  }

  getAll(): void {
    this.blocService.getAll()
      .subscribe(blocs => this.blocs = blocs);
  }

  delete(id: number): void {
    if (confirm('Are you sure you want to delete this bloc?')) {
      this.blocService.delete(id)
        .subscribe(() => {
          this.getAll(); // Refresh the list after deletion
        });
    }
  }
  goToUpdate(id: number): void {
    // Ensure id is valid before navigating
    if (id) {
      // Fetch bloc details by ID and then navigate to update component
      this.blocService.getById(id)
        .subscribe(bloc => {
          // Navigate to update component with the fetched bloc details
          this.router.navigate(['/update', id]);
        });
    } else {
      console.error('Invalid id:', id);
    }
  }
  
  goToAdd(): void {
    this.router.navigate(['/create']);
  }
}
