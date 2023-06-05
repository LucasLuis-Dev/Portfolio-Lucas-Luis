import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-arrow',
  templateUrl: './arrow.component.html',
  styleUrls: ['./arrow.component.css']
})
export class ArrowComponent {

  constructor(private router: Router) {}

  goBack(): void {
    this.router.navigate(['/']); // Navegue para a página principal
  }

}
