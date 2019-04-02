import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SectionHomeModule } from './sections/section-home.component';

@Component({
  selector: 'page-nivea',
  template: `
  <section-home id="home" class="page home-section"></section-home>

  `

})
export class PageNiveaComponent {
  title = 'landing-pages';
}


@NgModule({
  declarations: [
    PageNiveaComponent
  ],
  imports: [
    CommonModule, SectionHomeModule
  ],
  exports: [PageNiveaComponent],

})
export class PageNiveaModule { }
