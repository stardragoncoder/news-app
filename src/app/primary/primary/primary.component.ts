import { NewsService } from "./../../services/news.service";
import { Component, OnInit } from "@angular/core";
import { News } from "../../model/news";

@Component({ 
  selector: "app-primary",
  templateUrl: "./primary.component.html",
  styleUrls: ["./primary.component.scss"]
})
export class PrimaryComponent implements OnInit {
  news: News;
  index = 0;
  searchTerm:string='';
  constructor(public newsService: NewsService) {}

  ngOnInit(): void {
    this.newsService.getAll().subscribe(news => (this.news = news));
    // this.news.articles[0].title;
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

  submit(){
    this.news=null;
    this.newsService.getAllSearch(this.searchTerm).subscribe(news => (this.news = news));
  }
}
