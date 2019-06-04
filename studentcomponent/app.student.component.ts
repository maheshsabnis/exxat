import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import { Course } from './../../models/entities/app.course.entity';
import { Student } from './../../models/entities/app.student.entity';
import { Courses } from './../../models/entities/app.constants';
import { StudentLogic } from './../../models/logic/app.student.logic';
import {DomainValidator} from './app.custom.validator';
@Component({
    selector: 'app-student-component',
    templateUrl: './app.student.view.html'
})
export class StudentComponent implements OnInit {
    student: Student;
    students: Array<Student>;
    courses = Courses;
    private logic: StudentLogic;
    tableColumns: Array<string>;
    frmStudent: FormGroup;

    constructor() {
        this.student =new Student();
        this.logic = new StudentLogic();
        this.students = new Array<Student>();
        this.tableColumns = new Array<string>();
        this.initProp();        
        // link Model properties from Student Class to
        // formControls 
        this.frmStudent = new FormGroup({
            StudentId: new FormControl(this.student.StudentId,
                Validators.compose([Validators.required, Validators.pattern('[0-9]+'),
                                Validators.minLength(2),Validators.maxLength(5)])),
            StudentCode: new FormControl(this.student.StudentCode,
                 Validators.compose([DomainValidator.ValidateLength])),
            StudentName: new FormControl(this.student.StudentName),
            StudentAddress: new FormControl(this.student.StudentAddress),
            StudentCity: new FormControl(this.student.StudentCity),
            StudentState: new FormControl(this.student.StudentState),
            CourseId: new FormControl(this.student.CourseId)
        });
     }

     private initProp(): void {
         this.student.StudentId= 0;
         this.student.StudentCode = '';
         this.student.StudentName ='';
         this.student.StudentAddress = '';
         this.student.StudentCity = '';
         this.student.StudentState ='';
         this.student.CourseId = 0;
     }

     clear(): void {
         // redeclare object
         this.student = new Student();
         // nullify all values
         this.initProp();
         // set these nullify values to formGroup 
         this.frmStudent.setValue(this.student);
     }

     save(): void {
         // reading state of the form aka frmStudent
         this.student = this.frmStudent.value;
         this.students = this.logic.addStudent(this.student);
         this.student = new Student();
         
     }
     // the method that will be invoked immediately after the ctor
    ngOnInit(): void { 
        // read each property from student and push it in array
        for(let c in this.student) {
            this.tableColumns.push(c);
        }
    }

    // this method will be called on click of
    // Student Table Row
    getSelectedStudent(std: Student): void {
        this.frmStudent.setValue(std);
    }
}
