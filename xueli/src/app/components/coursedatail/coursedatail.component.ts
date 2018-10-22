import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router'
import { HttpClient} from '@angular/common/http'
@Component({
  selector: 'app-coursedatail',
  templateUrl: './coursedatail.component.html',
  styleUrls: ['./coursedatail.component.css']
})
export class CoursedatailComponent implements OnInit {

  constructor(
    private http:HttpClient,
    private router:ActivatedRoute
  ) { }
  course;
  courseId:number;
  studentName;
  ngOnInit() {
    this.courseId = this.router.snapshot.params['courseId'];

    this.http.get('/api/course/'+this.courseId).subscribe((data)=>{
      this.course = data;
    })
    this.studentName = ['文轩','世琪','马硕','金辀','润川'];
  }

}
