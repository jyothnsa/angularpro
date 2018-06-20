import { Component } from '@angular/core';
import { CoursesService } from './courses.service';

@Component({
    selector: 'courses',
    template: `
    <div (click) = "onDivClick()">
    <h2>{{getTitle()}}</h2>
    <ul>
    <li *ngFor="let course of courses">
    {{ course }}
    </li>
    </ul>
    <input (keyup.enter) = "onKeyUp($event)" />
    <button class="btn btn-primary" [style.backgroundColor] = "isActive ? 'blue' : 'white'"
    (click) = "onSave($event.stopPropagation())">Save</button>
    </div>
    `
})

export class CoursesComponent {
    title = 'List of Courses';
    isActive = true;
    courses;
    constructor(service: CoursesService) {
        this.courses = service.getCourses();
    }

    onSave($event) {
        console.log(this.courses);
    }
    onDivClick() {
        console.log('Clicked on Div');
    }
    getTitle() {
        return this.title;
    }
    onKeyUp($event) {
        console.log($event.target.value);
    }
    }
