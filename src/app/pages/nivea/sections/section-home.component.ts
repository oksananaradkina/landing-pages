import { Component, NgModule, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'section-home',
  template: `
<div class="display-table">
			<div class="table-cell">
				<div class="container">
					<div class="home-content">
						<h1 class="cd-headline clip is-full-width">
							<span class="cd-words-wrapper" style="width: 435.578px; overflow: hidden;">
								<b class="is-hidden">{{top[current]}}</b>
                <!--
								<b class="is-hidden">I'm Freelancer</b>
								<b class="is-visible">I'm Developer</b>
                -->
							</span>
						</h1>
						<ul class="list-social">
							<li><a href="#"><i class="fa fa-facebook-f"></i></a></li>
							<li><a href="#"><i class="fa fa-twitter"></i></a></li>
							<li><a href="#"><i class="fa fa-dribbble"></i></a></li>
							<li><a href="#"><i class="fa fa-behance"></i></a></li>
							<li><a href="#"><i class="fa fa-github"></i></a></li>
							<li><a href="#"><i class="fa fa-google-plus"></i></a></li>
						</ul>
					</div>
				</div>
			</div>
		</div>
  `

})
export class SectionHomeComponent implements OnInit {


  current = 0;
  top: string[] = [
    "I'm Creative",
    "I'm Freelancer",
    "I'm Developer"
  ]

  ngOnInit() {
    setInterval(() => {
      if (this.current < 2) {
        this.current++;
      } else {
        this.current = 0
      }

    }, 3000)
  }

}


@NgModule({
  declarations: [
    SectionHomeComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [SectionHomeComponent],

})
export class SectionHomeModule { }
