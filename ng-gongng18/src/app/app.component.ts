import { Component, OnInit } from '@angular/core';

import { Observable, combineLatest, timer } from 'rxjs'

// for angular & angular material
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatRadioModule } from '@angular/material/radio';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

import { AngularSplitModule } from 'angular-split';

import * as gongng18 from '../../projects/gongng18/src/public-api'

import { Gongng18specificComponent } from '../../projects/gongng18specific/src/public-api'

import { GongsvgDiagrammingComponent } from '@vendored_components/github.com/fullstack-lang/gongsvg/ng-github.com-fullstack-lang-gongsvg/projects/gongsvgspecific/src/lib/gongsvg-diagramming/gongsvg-diagramming'


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [

    CommonModule,
    FormsModule,

    MatRadioModule,
    MatButtonModule,
    MatIconModule,

    AngularSplitModule,
    GongsvgDiagrammingComponent,
    Gongng18specificComponent

  ],

  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {

  gongng18 = 'Gongng18'
  probe = 'Gongng18 Data/Model'
  view = this.gongng18

  views: string[] = [this.gongng18, this.probe];

  scrollStyle = {
    'overflow- x': 'auto',
    'width': '100%',  // Ensure the div takes the full width of its parent container
  }

  StackName = "gongng18"
  StackType = gongng18.StackType

  constructor(
  ) {

  }

  ngOnInit(): void {
  }
}
