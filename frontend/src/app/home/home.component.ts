import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  eventsList: any;
  private baseApiUrl: string = 'http://localhost:3000/api';

  constructor(private http: HttpClient) { 
    http.get(this.baseApiUrl + '/events').subscribe((res: any) => {
      console.log(res);
      this.eventsList = res.data;
    })
  }

  ngOnInit(): void {
  }

}
