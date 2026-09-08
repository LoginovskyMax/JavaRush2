import { Component, inject } from '@angular/core';
import { RickApi } from '../services/rick-api';
import { IRickApi } from '../types/auth';
import { Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-rick-pipe',
  imports: [AsyncPipe],
  templateUrl: './rick-pipe.html',
  styleUrl: './rick-pipe.scss',
})
export class RickPipe {
  rickService = inject(RickApi)
  data$: Observable<IRickApi> | null = null;

  ngOnInit(){
    this.data$ = this.rickService.fetchRickApi()
  }
}
