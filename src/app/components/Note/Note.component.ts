import { Component, Input, OnInit } from '@angular/core';
import { NoteModel } from 'src/app/models/note.model';

@Component({
  selector: 'Note',
  templateUrl: './Note.component.html',
  styleUrls: ['./Note.component.css']
})
export class NoteComponent implements OnInit {

  @Input() note: NoteModel;

  constructor() { }

  ngOnInit() {
  }

}
