import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { LoadingService } from './services/loading.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private router: Router, public loadingService: LoadingService) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    });
  }

  ngOnInit() {
    // Simule algum processo assíncrono que você deseja que a tela de carregamento aguarde
    setTimeout(() => {
      // Após a conclusão do processo, esconda a tela de carregamento
      this.loadingService.showLoading = false;
    }, 2000); // Aqui você pode ajustar o tempo de simulação
  }

  
}
