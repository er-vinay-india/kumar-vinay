import { Component, OnInit } from '@angular/core';
import { RenderOnModalService } from '../render-on-modal.service';

@Component({
  selector: 'app-cm-modal',
  templateUrl: './cm-modal.component.html',
  styleUrls: ['./cm-modal.component.scss']
})
export class CmModalComponent implements OnInit {

  displayImg: any;

  constructor(
    private renderOnModal: RenderOnModalService
  ) { }

  ngOnInit(): void {
    this.renderOnModal.myObserver.subscribe((data: any) => {
      this.displayImg = data;
    })
  }

  ngOnDestroy() {
    this.renderOnModal.myObserver.unsubscribe();
  }
}
