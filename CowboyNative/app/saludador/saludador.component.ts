import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'ns-saludador',
  moduleId: module.id,
  templateUrl: './saludador.component.html',
  styleUrls: ['./saludador.component.css']
})
export class SaludadorComponent implements OnInit {
  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {}
}
