import { Component, OnInit } from '@angular/core';
import { NbuService, Nbu } from '../nbu.service';

@Component({
  moduleId: module.id,
  selector: 'app-main',
  templateUrl: 'main.component.html',
  styleUrls: ['main.component.css'],
  providers: [NbuService]
})
export class MainComponent implements OnInit {

  courses: any;
  selectedNbu: Nbu;

  constructor(private nbuService: NbuService) {}

  ngOnInit() {
     this.nbuService.loadNbu()
      .then(courses => {
        this.courses = courses;
      });
      
      /*console.log(this.nbuService.loadNbu());*/
  }
}