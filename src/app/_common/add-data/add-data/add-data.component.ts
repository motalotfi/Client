import { Component, OnInit } from '@angular/core';
import { CommonService } from '../../common.service';
import { NotifierService } from 'angular-notifier';
import { Router } from '@angular/router';
// import { CommonService } from '../../common.service';

@Component({
  selector: 'app-add-data',
  templateUrl: './add-data.component.html',
  styleUrls: ['./add-data.component.scss']
})
export class AddDataComponent implements OnInit {
  enterPhone: any;
  dataList: any = [];
  notifier;
  // constructor(private httpService: CommonService) { }
  constructor(private service: CommonService, private router: Router, notifier: NotifierService) {
    // location.reload()
    this.notifier = notifier

  }

  ngOnInit() {
  }
  async getCompanyInformation(phoneNo) {
    try {
      this.dataList = await this.service.getCompanyInformation(phoneNo);

    } catch (error: any) {
      throw error
    }
    // let data = ((this.service.getData()).filter((item: any) => item.phoneNo == this.enterPhone))[0];
    if (this.dataList.length == 0) {
      this.notifier.notify('info', 'اطلاعاتی یافت نشد');
      setTimeout(() => {

        this.router.navigate(['/data-add']);
      }, 1800);


    }
    if (this.dataList.length == 1) {
      console.log(this.dataList[0].CompanyId);
      this.router.navigate(['/edit-data/' + this.dataList[0].CompanyId]);


    }


  }


}
