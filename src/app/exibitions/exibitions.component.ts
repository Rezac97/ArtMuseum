import { Component } from '@angular/core';
import { ExibitionService } from '../services/exibition.service';
import { Exibition } from '../model/exibition.model';

@Component({
  selector: 'app-exibitions',
  templateUrl: './exibitions.component.html',
  styleUrls: ['./exibitions.component.css']
})
export class ExibitionsComponent {

  exibitions: Exibition[] = [];

  constructor(private service: ExibitionService) { }

  ngOnInit() {
    this.getExibitions();
  }

  getExibitions(): void {
    this.service.getExibitions().subscribe({
      next: (exibitions: Exibition[]) => {
        console.log(exibitions);
        this.exibitions = exibitions;
      },
      error: (response: any) => {
        console.log('error: ', response);
      }
    })
  }





}
