import { Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  searchResults: any;

  constructor(private router: Router, private currentRoute: ActivatedRoute) { }

  getResultsFor(data: any[]) {
    this.searchResults = data;
    this.router.navigate(['results'])
  }
}
