import { Component, OnInit } from '@angular/core';

export class Article{
  votes: number;
  title: string;
  link: string;
  constructor(title: string, link: string, votes?: number){
    this.title = title;
    this.link = link;
    this.votes = votes;
  }
  voteUp(){
    this.votes +=1;
    return false;
  }
  voteDown(){
    this.votes -=1;
  }
  domain():string{
    try {
      const link: string = this.link.split('//')[1];
      return link.split('/')[0];
    }catch (error){
      return null;
    }
  }
}

@Component({
  moduleId: module.id,
  selector: 'app-article',
  inputs: ['article'],
  host: {class: 'row'},
  templateUrl: 'article.component.html',
  styleUrls: ['article.component.css']
})
export class ArticleComponent implements OnInit {
  article : Article;

  constructor() {
    this.article = new Article('Angular 2','http://angular.io',10);
  }
  voteUp(): boolean{
    this.article.voteUp();
    return false;
  }
  voteDown(): boolean{
    this.article.voteDown();
    return false;
  }

  ngOnInit() {
  }

}
