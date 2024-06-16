import { CommonModule } from '@angular/common';
import { Component, OnInit, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  vowels = [
    { letter: 'a', count: 0 },
    { letter: 'e', count: 0 },
    { letter: 'i', count: 0 },
    { letter: 'o', count: 0 },
    { letter: 'u', count: 0 },
  ];
  title = 'AnalyseCharacter';
  @ViewChild('heading',{static:true}) heading: any;

  ngOnInit(): void {
    this.heading.nativeElement.innerHTML=`<h1>Analyzer Words</h1>`
  }
  onInput(Input:any){
    let aCount=0;
    let eCount=0;
    let iCount=0;
    let oCount=0;
    let uCount=0;

    for(let char of Input){
      if(char==='a'){
        aCount++;
      }
      if(char==='e'){
        eCount++;
      }
      if(char==='o'){
        oCount++;
      }
      if(char==='u'){
        uCount++;
      }
      if(char==='i'){
        iCount++;
      }
    }
    this.vowels=[
      { letter: 'a', count: aCount },
      { letter: 'e', count: eCount },
      { letter: 'i', count: iCount },
      { letter: 'o', count: oCount },
      { letter: 'u', count: uCount },
    ]
  }
}
