import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  eventsList: any;

  constructor(private http: HttpClient, private api: ApiService) { 
    http.get(this.api.baseUrl + '/events').subscribe((res: any) => {
      this.eventsList = res.data;
    })
  }

  ngOnInit(): void {
  }

}
