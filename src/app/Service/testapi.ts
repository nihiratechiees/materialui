import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Testapi {

  constructor(private http: HttpClient) {

  }
  ApiEndpoint = 'http://localhost:3000/course';

  GetCourses() {
    return this.http.get(this.ApiEndpoint);
  }

  CreateCourse(course: any) {
    return this.http.post(this.ApiEndpoint, course);
  }

  UpdateCourse(course: any) {
    return this.http.put(this.ApiEndpoint + '/' + course.id, course)
  }

  Delete(id:number){
     return this.http.delete(this.ApiEndpoint + '/' + id)
  }


}
