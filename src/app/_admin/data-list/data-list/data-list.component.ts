import { Component, OnInit } from '@angular/core';
import { CommonService } from '../../../_common/common.service';
import { Router } from '@angular/router';
import { NotifierService } from 'angular-notifier';

@Component({
  selector: 'app-data-list',
  templateUrl: './data-list.component.html',
  styleUrls: ['./data-list.component.scss']
})
export class DataListComponent implements OnInit {
  datas: any = [];
  notifier;
  constructor(private service: CommonService, private router: Router, notifier: NotifierService) {
    this.notifier = notifier
  }

  ngOnInit() {
    this.getDatas()
  }
  async getDatas() {
    try {
      this.datas = await this.service.getCompanyInformation(null);
      console.log(this.datas);
    } catch (error) {
      throw error
    }

  }
  async delete(id) {
    try {
      await this.service.deleteCompanyInformation(id);
      this.notifier.notify('success' , "با موفقیت حذف شد")
this.getDatas()
    } catch (error) {
    }
  }

  edit(id) {
    this.router.navigate(['/edit-data' + id])

  }
}
