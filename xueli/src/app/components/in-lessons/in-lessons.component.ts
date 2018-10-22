import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router} from "@angular/router"
import {HttpClient} from "@angular/common/http"
@Component({
  selector: 'app-in-lessons',
  templateUrl: './in-lessons.component.html',
  styleUrls: ['./in-lessons.component.css']
})
export class InLessonsComponent implements OnInit {

  constructor(private router:ActivatedRoute,
    private route:Router,
    private http:HttpClient) { }

  ngOnInit() {
  }

}
