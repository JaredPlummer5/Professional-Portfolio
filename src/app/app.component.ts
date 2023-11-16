import { Component, OnInit, AfterViewInit, ViewChild, ViewChildren, QueryList, ElementRef, Renderer2, Inject, ViewEncapsulation } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { ChangeDetectorRef } from '@angular/core';
import { GithubService } from './github.service';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Flip } from 'gsap/Flip';
import { } from '@angular/core';


gsap.registerPlugin(ScrollTrigger, Flip);

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
  encapsulation: ViewEncapsulation.None

})
export class AppComponent implements OnInit, AfterViewInit {
  @ViewChildren('githubLink') githubLinks: QueryList<ElementRef> | undefined;
  @ViewChild('carousel') carousel: ElementRef | undefined;

  title = 'portfolio';
  repositories: any[] = [];

  constructor(private githubService: GithubService, private renderer: Renderer2, @Inject(DOCUMENT) private document: Document, private elRef: ElementRef, private cdRef: ChangeDetectorRef) { }


  ngOnInit(): void {
    this.githubService.getRepositories('JaredPlummer5').subscribe(data => {
      this.repositories = data;
      console.log(this.repositories);
      this.createCards();
      this.initializeAnimation();
    });
  }

  createCards() {
    const container = this.elRef.nativeElement.querySelector('.RepoWrapper');
    this.repositories.forEach(repo => {
      // Create card div
      const card = this.renderer.createElement('div');
      this.renderer.addClass(card, 'card');
      this.renderer.addClass(card, 'box');
      this.renderer.addClass(card, 'creative-pro');
      this.renderer.setStyle(card, 'max-width', '20rem');

      // Create h3 for repo name
      const h3 = this.renderer.createElement('h3');
      const h3Text = this.renderer.createText(repo.name);
      this.renderer.appendChild(h3, h3Text);

      // Create p for repo description
      const p = this.renderer.createElement('p');
      const pText = this.renderer.createText(repo.description || ''); // Handle null description
      this.renderer.appendChild(p, pText);

      // Create anchor for GitHub link
      const a = this.renderer.createElement('a');
      this.renderer.setAttribute(a, 'href', repo.html_url);
      this.renderer.setAttribute(a, 'target', '_blank');
      const aText = this.renderer.createText('View on GitHub');
      this.renderer.appendChild(a, aText);

      // Append h3, p, and a to card
      this.renderer.appendChild(card, h3);
      this.renderer.appendChild(card, p);
      this.renderer.appendChild(card, a);

      // Append card to container
      this.renderer.appendChild(container, card);
    });
  }


  ngAfterViewInit() {
    this.initializeAnimation();

  }




  initializeAnimation() {
    const cards = this.elRef.nativeElement.querySelectorAll('.creative-pro');
    const radius = 1000;

    gsap.set(".RepoWrapper", {
      perspective: 1100,
      transformStyle: "preserve-3d"
    });

    cards.forEach((element: gsap.TweenTarget, index: number) => {
      gsap.set(element, {
        rotationY: index * 360 / cards.length,
        transformOrigin: "50% 50% " + -radius
      });
      gsap.to(element, {
        duration: 80,
        rotationY: "-=250",
        repeat: -1,
        ease: "none"
      });
    });
  }

}
