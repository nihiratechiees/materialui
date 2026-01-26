import { Component, computed, effect, signal } from '@angular/core';

@Component({
  selector: 'app-learnsignal',
  imports: [],
  templateUrl: './learnsignal.html',
  styleUrl: './learnsignal.css',
})
export class Learnsignal {
  apptitle = signal('Learning Angular Signals');
  courses = signal(['Angular', 'React', 'Vue', 'Svelte']);
  totalcourse = computed(() => this.courses().length);
  eff = effect(() => {
    console.log('Total Courses Available: ' + this.totalcourse());
    this.apptitle();
  });

  changeTitle(title: string) {
    this.apptitle.set(title);
  }

  Addcourse(course: string) {
    this.courses.update(courses => [...courses, course]);
  }

}
