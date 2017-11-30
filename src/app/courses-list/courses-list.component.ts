import {Component, Input} from '@angular/core';
import {Course} from "../shared/model/course";

@Component({
    selector: 'courses-list',
    templateUrl: './courses-list.component.html',
    styleUrls: ['./courses-list.component.css']
})
export class CoursesListComponent {

    @Input()
    courses: Course[];

}
