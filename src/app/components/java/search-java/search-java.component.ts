import { ProjectService } from '../../../services/project.service';
import { Component, OnInit } from '@angular/core';
import { Project } from 'src/app/model/Project';

@Component({
  selector: 'app-search-java',
  templateUrl: './search-java.component.html',
  styleUrls: [
    './search-java.component.css',
    './skel.css',
    './style.css',
    './style-xlarge.css']
})
export class SearchJavaComponent implements OnInit {

  projects: any=[];
  languages: string;
  constructor(private projectService:ProjectService) { }

  ngOnInit(): void {
    
  }

  //find by java projects
  getProjects(){
    this.projectService.getProjects(this.languages).subscribe(data => {
      this.projects = data,
      console.log(data);
    },
    error => console.error(error));
  }

  /*getAllProjects(){
    this.projectService.getAllProjects()this.projectService.getAllProjects().subscribe(data => this.projects = data);
  }*/

}
