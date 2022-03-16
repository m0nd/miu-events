import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { SearchService } from '../services/search.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  eventsList: any;
  searchResults: any = [];
  searchTerm = '';
  noDataMessage = '';

  constructor(private http: HttpClient, private api: ApiService, private search: SearchService) { 
    
  }

  ngOnInit(): void {
    this.http.get(this.api.baseUrl + '/events').subscribe((res: any) => {
      this.eventsList = res.data;
    })
  }

   
  searchEvents(event: any) {
    this.searchTerm = event.srcElement.value;
    // console.log(this.searchTerm);
    
    
    // Make a get request with user input to the API
    // this.http.get(this.api.baseUrl + '/events/search?searchTerm=' + this.searchTerm, {}).subscribe(response => {
      
    //   this.searchResults = response;
    //   if(!!this.searchResults.data){
    //     this.eventsList = this.searchResults.data;
    //   }else{
    //     console.log(this.searchResults.message);
    //     this.noDataMessage = this.searchResults.message;
    //     this.eventsList = [];
    //   }
    //   // console.log(!!this.searchResults.data);
      
    //   // console.log(!!this.eventsList);
    //   // console.log(response);
    //   // Send response to a searchService e.g. this.search.getResultsFor(response)
    //   // router.navigate(['results'])
    // })
  }

}
