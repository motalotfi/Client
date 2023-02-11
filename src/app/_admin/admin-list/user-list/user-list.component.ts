import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/_common/common.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
  datas: any = [];
  datas2: any = [];
  constructor(private service: CommonService) { }

  ngOnInit() {
    this.getDatas()
  }
  async getDatas() {
    try {
      this.datas = await this.service.getUsersInfo(null , BoomrangEnum.RoleType.Operator);
      this.datas.forEach(element => {
        element.gender = element.Gender ==BoomrangEnum.Gender.Male ? "مرد" : 'زن'
        
      });
      this.datas2 = await this.service.getUsersInfo(null , BoomrangEnum.RoleType.Admin);
      this.datas2.forEach(element => {
        element.gender = element.Gender ==BoomrangEnum.Gender.Male ? "مرد" : 'زن'
        
      });
    } catch (error) {

    }

  }
}
