import { Component, OnInit } from '@angular/core';
import { NewsService } from 'src/app/services/news.service';
import { News } from 'src/app/model/news';

@Component({
  selector: 'app-secondary',
  templateUrl: './secondary.component.html',
  styleUrls: ['./secondary.component.scss']
})
export class SecondaryComponent implements OnInit {
  news: News;
  index:number=0;
  
  constructor(public newsService: NewsService) { }

  ngOnInit(): void {
    this.newsService.getTopHL().subscribe(news => this.news=news);
  }

  next() {
    this.index++;
    if (this.index == this.news.articles.length) {
      this.index = 0;
    }
  }

  prev() {
    this.index--;
    if (this.index == -1) {
      this.index = this.news.articles.length - 1;
    }
  }

}
