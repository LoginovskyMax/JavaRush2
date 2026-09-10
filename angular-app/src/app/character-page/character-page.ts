import { Component, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  selector: 'app-character-page',
  imports: [RouterLink],
  templateUrl: './character-page.html',
  styleUrl: './character-page.scss',
})
export class CharacterPage {
    private route = inject(ActivatedRoute); 
    id: string | null = ''
    searchFilter: string | null = ''

    ngOnInit(){
       this.route.paramMap.subscribe(params => {
          this.id = params.get('id');
       });

    this.route.queryParamMap.subscribe(queryParams => {
      this.searchFilter = queryParams.get('filter');
    });
    } 
}
