import { Component, OnInit } from '@angular/core';
import { CommonService } from '../common.service';
import { NotifierService } from 'angular-notifier';
import { Route, Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-add-company',
  templateUrl: './add-company.component.html',
  styleUrls: ['./add-company.component.scss']
})
export class AddCompanyComponent implements OnInit {
  data: any = [];
  userProvinceList: any = [];
  productsLength = 1;
  infoShow = true;
  user = { firstName: '', lastName: '' };
  companyShow = true;
  productShow = true;
  productShow2 = true;
  productShow3 = true;
  userCityList: any = [];
  userSelectedProvince: any;
  userSelectedCity: any;
  genderOption: any;
  currentDate = new Date();
  ProviceOption: any;
  date = new Date()
  notifier;
  ActivityField: any = [];
  ProficiencyField: any = [];
  activityOption: any;
  CompanyProducts: any = [];
  CompanyInformationId: any;
  companyProduct = {
    CompanyProductId: null,
    CompanyImportantProduct: "",
    ProductKnowledgeField: "",
    ProductApplication: "",
    ProductDescription: "",

    CompanyImportantProduct2: "",
    ProductKnowledgeField2: "",
    ProductApplication2: "",
    ProductDescription2: "",

    CompanyImportantProduct3: "",
    ProductKnowledgeField3: "",
    ProductApplication3: "",
    ProductDescription3: ""
  }
  activeState: boolean[] = [true, false, false];

  constructor(private route: ActivatedRoute, private coreService: CommonService, notifier: NotifierService) {
    this.notifier = notifier;
  }

  ngOnInit() {
    this.route.paramMap.subscribe((params: any) => {
      this.CompanyInformationId = params.get('Id');
    })
    this.currentDate = new Date();
    this.userGetProvinces();
    this.getActivityField();
    this.getProficiencyField();

    this.ProviceOption = {
      multiple: false,
      tags: true
    };
    this.activityOption = {
      multiple: true,
      tags: true
    };
  }

  async getActivityField() {
    let data: any = await this.coreService.getActivityField()
    this.ActivityField = data;
    if (this.ActivityField.length > 0) {
      this.ActivityField.forEach(element => { element.id = element.Id, element.text = element.Title })
    }
  } async getProficiencyField() {
    let data: any = await this.coreService.getProficiencyField()
    this.ProficiencyField = data;
    if (this.ProficiencyField.length > 0) {
      this.ProficiencyField.forEach(element => { element.id = element.Id, element.text = element.Title })
    }
  } async userGetProvinces() {
    let data: any = await this.coreService.getProvinces()
    this.userProvinceList = data;
    if (this.userProvinceList.length > 0) {
      this.userProvinceList.forEach(element => { element.id = element.Id, element.text = element.Title })
    }
  }
  async userGetCityList(selectedProvince) {
    if (selectedProvince) {
      let data: any = await this.coreService.getCities(selectedProvince)
      this.userCityList = data;
      if (this.userCityList.length > 0) {
        this.userCityList.forEach((element: any) => {
          element.id = element.Id,
            element.text = element.Title
        });

      }
    }
  }
  addProducts(item) {
    this.CompanyProducts.push(item)
  }
  async save() {
    if (!this.data['firstName']) {
      this.notifier.notify('error', 'لطفا نام  را وارد کنید')
      return
    } if (!this.data['lastName']) {
      this.notifier.notify('error', 'لطفا نام خانوادگی  را وارد کنید')
      return
    } if (!this.data['phoneNo']) {
      this.notifier.notify('error', 'لطفا شماره موبایل  را وارد کنید')
      return
    }
    if (this.productsLength == 1) {
      let ittem: any = "";
      (this.data['scienceField']).forEach(element => {
        this.ActivityField.forEach(element2 => {
          if (element2.id == element) {
            element = element2.text
          }
        });
        if ((this.data['scienceField']).length > 1) {
          ittem += "," + element
        }
        else {
          ittem = element
        }
      });
      ittem = ittem.length > 1 ? ittem.substring(1) : ittem
      let item = {
        CompanyImportantProduct: this.data['importantProduct'],
        ProductKnowledgeField: ittem,
        ProductApplication: this.data['costumer'],
        ProductDescription: this.data['descProduct']
      }
      this.addProducts(item)
    }
    if (this.productsLength == 2) {
      let ittem: any = "";
      (this.data['scienceField']).forEach(element => {
        this.ActivityField.forEach(element2 => {
          if (element2.id == element) {
            element = element2.text
          }
        });
        if ((this.data['scienceField']).length > 1) {
          ittem += "," + element
        }
        else {
          ittem = element
        }
      });
      ittem = ittem.length > 1 ? ittem.substring(1) : ittem
      let item1 = {
        CompanyImportantProduct: this.data['importantProduct'],
        ProductKnowledgeField: ittem,
        ProductApplication: this.data['costumer'],
        ProductDescription: this.data['descProduct']
      }
      let ittem2: any = "";
      (this.data['scienceField2']).forEach(element => {
        this.ActivityField.forEach(element2 => {
          if (element2.id == element) {
            element = element2.text
          }
        });
        if ((this.data['scienceField2']).length > 1) {
          ittem2 += "," + element
        }
        else {
          ittem2 = element
        }
      });
      ittem2 = ittem2.length > 1 ? ittem2.substring(1) : ittem2
      let item2 = {
        CompanyImportantProduct: this.data['importantProduct2'],
        ProductKnowledgeField: ittem2,
        ProductApplication: this.data['costumer2'],
        ProductDescription: this.data['descProduct2']
      }
      this.addProducts(item1)
      this.addProducts(item2)
    }
    if (this.productsLength == 3) {
      let ittem: any = "";
      (this.data['scienceField']).forEach(element => {
        this.ActivityField.forEach(element2 => {
          if (element2.id == element) {
            element = element2.text
          }
        });
        if ((this.data['scienceField']).length > 1) {
          ittem += "," + element
        }
        else {
          ittem = element
        }
      });
      ittem = ittem.length > 1 ? ittem.substring(1) : ittem
      let item1 = {
        CompanyImportantProduct: this.data['importantProduct'],
        ProductKnowledgeField: ittem,
        ProductApplication: this.data['costumer'],
        ProductDescription: this.data['descProduct']
      }
      let ittem2: any = "";
      (this.data['scienceField2']).forEach(element => {
        this.ActivityField.forEach(element2 => {
          if (element2.id == element) {
            element = element2.text
          }
        });
        if ((this.data['scienceField2']).length > 1) {
          ittem2 += "," + element
        }
        else {
          ittem2 = element
        }
      });
      ittem2 = ittem2.length > 1 ? ittem2.substring(1) : ittem2
      let item2 = {
        CompanyImportantProduct: this.data['importantProduct2'],
        ProductKnowledgeField: ittem2,
        ProductApplication: this.data['costumer2'],
        ProductDescription: this.data['descProduct2']
      }
      let ittem3: any = "";
      (this.data['scienceField3']).forEach(element => {
        this.ActivityField.forEach(element2 => {
          if (element2.id == element) {
            element = element2.text
          }
        });
        if ((this.data['scienceField3']).length > 1) {
          ittem3 += "," + element
        }
        else {
          ittem3 = element
        }
      });
      ittem3 = ittem3.length > 1 ? ittem3.substring(1) : ittem3
      let item3 = {
        CompanyImportantProduct: this.data['importantProduct3'],
        ProductKnowledgeField: ittem3,
        ProductApplication: this.data['costumer3'],
        ProductDescription: this.data['descProduct3']
      }
      this.addProducts(item1)
      this.addProducts(item2)
      this.addProducts(item3)
    }
    console.log(this.addProducts);
    let CompanyInformationId;
    if (!this.CompanyInformationId) {
      CompanyInformationId = null
    }
    else {
      CompanyInformationId = this.CompanyInformationId
    }
    let gender;
    switch (this.data['gender']) {
      case 0:
        gender = BoomrangEnum.Gender.Female

        break;

      default:
        gender = BoomrangEnum.Gender.Male

        break;
    }
    let knowledgeBase;
    switch (this.data['knowledgeBase']) {
      case 0:
        knowledgeBase = false
        break;

      default:
        knowledgeBase = true

        break;
    }
    let educate;
    switch (this.data['education']) {
      case '1':
        educate = BoomrangEnum.EducationType.BeforeDiploma

        break;
      case '2':
        educate = BoomrangEnum.EducationType.Diploma

        break;

      case '3':
        educate = BoomrangEnum.EducationType.Bachelor

        break; case '4':
        educate = BoomrangEnum.EducationType.Master

        break; case '5':
        educate = BoomrangEnum.EducationType.Doctoral

        break; case '6':
        educate = BoomrangEnum.EducationType.PostDoctoral

        break;

      default:
        break;
    }

    // let mount;
    // switch (this.data['companyCount']) {
    //   case '1':
    //     mount = BoomrangEnum.EducationType.BeforeDiploma

    //     break;
    //   case '2':
    //     mount = BoomrangEnum.EducationType.Diploma

    //     break;

    //   case '3':
    //     mount = BoomrangEnum.EducationType.Bachelor

    //     break; case '4':
    //     educate = BoomrangEnum.EducationType.Master

    //     break; case '5':
    //     educate = BoomrangEnum.EducationType.Doctoral

    //     break;

    // }
    let activity: any = "";

    (this.data['activity']).forEach(element => {
      this.ActivityField.forEach(element2 => {
        if (element2.id == element) {
          element = element2.text
        }

      });
      if ((this.data['activity']).length > 1) {
        activity += "," + element
      }
      else {
        activity = element
      }

    });
    activity = activity.length > 1 ? activity.substring(1) : activity


    let skill: any = "";

    (this.data['skill']).forEach(element => {
      this.ProficiencyField.forEach(element2 => {
        if (element2.id == element) {
          element = element2.text
        }

      });
      if ((this.data['skill']).length > 1) {
        skill += "," + element
      }
      else {
        skill = element
      }

    });
    skill = skill.length > 1 ? skill.substring(1) : skill


    let model = {
      CompanyInformationId,
      FirstName: this.data['firstName'],
      LastName: this.data['lastName'],
      Gender: gender,
      Education: educate,
      Major: this.data['major'],
      CityId: this.data['city'],
      EmailAddress: this.data['email'],
      ProficiencyField: skill,
      ActivityField: activity,
      CompanyName: this.data['companyName'],
      UserPosition: this.data['companyPos'],
      IsKnowledgeEnterprise: knowledgeBase,
      PhoneNumber: this.data['companyPhone'],
      WebsiteAddress: this.data['companyWeb'],
      EstablishmentYear: this.data['birthDay'],
      ManpowerCount: this.data['companyCount'],
      DataImporter: null,
      DataEntryDateTime: null,
      UpdatedDataImporter: null,
      DataUpdateDateTime: null,
      CompanyProducts: this.CompanyProducts
    }
    console.log(model);
    try {
      await this.coreService.saveCompanyInformation(model);
      this.notifier.notify('success' , 'با موفقیت افزوده شد');
    } catch (error) {
      this.notifier.notify('error' , ' مشکلی بوجود آمد');

    }
    this.data = []
  }

  infoShowToggle() {
    let elem: any = document.querySelector('.personal-info');
    let elem2: any = document.querySelector('.i1');
    if (this.infoShow) {
      elem.classList.remove('open');
      elem.classList.add('closes');
      elem2.classList.remove('fa-chevron-down');
      elem2.classList.add('fa-chevron-up');
    }
    else {
      elem.classList.add('open');
      elem.classList.remove('closes');
      elem2.classList.add('fa-chevron-down');
      elem2.classList.remove('fa-chevron-up');

    }
    this.infoShow = !this.infoShow;

  }
  companyShowToggle() {
    let elem: any = document.querySelector('.company-info');
    let elem2: any = document.querySelector('.i2');
    if (this.companyShow) {
      elem.classList.remove('open');
      elem.classList.add('closes');
      elem2.classList.remove('fa-chevron-down');
      elem2.classList.add('fa-chevron-up');
    }
    else {
      elem.classList.add('open');
      elem.classList.remove('closes');
      elem2.classList.add('fa-chevron-down');
      elem2.classList.remove('fa-chevron-up');

    }
    this.companyShow = !this.companyShow;

  }
  productShowToggle() {
    let elem: any = document.querySelector('.product-info');
    let elem2: any = document.querySelector('.i3');
    if (this.productShow) {
      elem.classList.remove('open');
      elem.classList.add('closes');
      elem2.classList.remove('fa-chevron-down');
      elem2.classList.add('fa-chevron-up');
    }
    else {
      elem.classList.add('open');
      elem.classList.remove('closes');
      elem2.classList.add('fa-chevron-down');
      elem2.classList.remove('fa-chevron-up');

    }
    this.productShow = !this.productShow;

  }
  productShowToggle2() {
    let elem: any = document.querySelector('.product-info2');
    let elem2: any = document.querySelector('.i4');
    if (this.productShow2) {
      elem.classList.remove('open');
      elem.classList.add('closes');
      elem2.classList.remove('fa-chevron-down');
      elem2.classList.add('fa-chevron-up');
    }
    else {
      elem.classList.add('open');
      elem.classList.remove('closes');
      elem2.classList.add('fa-chevron-down');
      elem2.classList.remove('fa-chevron-up');

    }
    this.productShow2 = !this.productShow2;

  }
  productShowToggle3() {
    let elem: any = document.querySelector('.product-info3');
    let elem2: any = document.querySelector('.i5');
    if (this.productShow3) {
      elem.classList.remove('open');
      elem.classList.add('closes');
      elem2.classList.remove('fa-chevron-down');
      elem2.classList.add('fa-chevron-up');
    }
    else {
      elem.classList.add('open');
      elem.classList.remove('closes');
      elem2.classList.add('fa-chevron-down');
      elem2.classList.remove('fa-chevron-up');

    }
    this.productShow3 = !this.productShow3;

  }
  addProductsLength() {
    if (this.productsLength < 3) {

      this.productsLength += 1
    }
    else {
      this.notifier.notify('warning', "حداکثر 3 محصول میتوانید اضافه کنید")
    }
  }
}
