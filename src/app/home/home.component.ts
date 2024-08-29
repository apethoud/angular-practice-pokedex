import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { SearchByNameOrIdService } from '../services/search-by-name-or-id.service';
import { CommonModule, TitleCasePipe } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, FormsModule, MatCardModule, MatFormFieldModule, MatInputModule, TitleCasePipe],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  providers: [SearchByNameOrIdService]
})
export class HomeComponent {
  selectedPokemon: any;

  constructor (private searchByNameOrIdService: SearchByNameOrIdService) {}

  async onSubmit(value: string) {
    console.log(`form submitted with value ${value}`);
    this.selectedPokemon = await this.searchByNameOrIdService.getPokemonByNameOrId(value);
    console.log("this.selectedPokemon is: ", this.selectedPokemon);
  }
}
