import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'angTemplates';

  ngOnInit() {
    setTimeout(() => {
      this.showLoader();
    }, 0);
    setTimeout(() => {
      this.hideLoader();
    }, 1000);
  }

  showLoader() {
    const loaderOverlay = document.getElementById('loader-overlay');
    if (loaderOverlay) {
      loaderOverlay.classList.remove('hidden');
    }
  }

  hideLoader() {
    const loaderOverlay = document.getElementById('loader-overlay');
    if (loaderOverlay) {
      loaderOverlay.classList.add('hidden');
    }
  }
}
