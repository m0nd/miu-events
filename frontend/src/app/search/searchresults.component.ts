import { Component, OnInit } from '@angular/core';
import { SearchService } from '../services/search.service';

@Component({
  selector: 'app-searchresults',
  templateUrl: './searchresults.component.html',
  styleUrls: ['./searchresults.component.css']
})
export class SearchresultsComponent implements OnInit {
  results: any[] = [];
  noResults: boolean = false;

  constructor(private search: SearchService) { 
    
  }

  ngOnInit(): void {
    this.results = this.search.searchResults;
    if (this.results == undefined) {
      this.noResults = true;
    }
  }

}
