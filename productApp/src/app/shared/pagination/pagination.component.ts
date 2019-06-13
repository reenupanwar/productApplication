import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent {
  // Input
  @Input() totalPage: number;
  @Input() currentPage: number;
  @Input() paginateNext: string;
  @Input() paginatePrev: string;

  // Output
  @Output() selectedPage = new EventEmitter<string>();

  constructor() { }

  changePageNumber(currentPage, pageFlow, link: string) {

    if (this.currentPage >= 1 && this.currentPage <= this.totalPage) {
      if (this.currentPage == 1 && pageFlow == -1) {
        return;
      } else if (this.currentPage == this.totalPage && pageFlow == +1) {
        return;
      }
      this.currentPage = currentPage + pageFlow;
      this.selectedPage.emit(link);
      console.log(this.currentPage)
    }
  }

  changePageLimit(limit: any) {
   // this.currentPage = 1;
    this.totalPage = this.totalPage / limit;
    this.selectedPage.emit(limit);

  }




}
