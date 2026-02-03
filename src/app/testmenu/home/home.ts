import { Component, signal } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { Testapi } from '../../Service/testapi';

@Component({
  selector: 'app-home',
  imports: [RouterOutlet, RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {

  courselist = signal<any[]>([]);

  constructor(private api: Testapi) { }
  ngOnInit() {
    this.api.GetCourses().subscribe(data => {
      this.courselist.set(data as any[]);
      //console.log(this.courselist);
    })
  }

  createcourse() {
    const _course = { id: 3, name: 'VueJs' }
    this.api.CreateCourse(_course).subscribe(data => {
      console.log(data);
    })
  }

}
