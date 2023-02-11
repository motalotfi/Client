import { Injectable } from '@angular/core';
import { EntityContextProvider } from '../bit';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  context!: AppContext;

  constructor() { }


  private async getContext(): Promise<AppContext> {
    if (!this.context) {
      this.context = await EntityContextProvider.getContext<AppContext>("App");
    }
    return this.context;
  }

  async getActivityField(): Promise<BoomrangModel.InformationDto[]> {
    try {
      let context = await this.getContext();
      return await context.masterData.getActivityField().toArray();
    } catch (err) {
      throw err;
    }
  } async getProficiencyField(): Promise<BoomrangModel.InformationDto[]> {
    try {
      let context = await this.getContext();
      return await context.masterData.getProficiencyField().toArray();
    } catch (err) {
      throw err;
    }
  }
  async getProvinces(): Promise<BoomrangModel.InformationDto[]> {
    try {
      let context = await this.getContext();
      return await context.masterData.getProvinces().toArray();
    } catch (err) {
      throw err;
    }
  }
  async getCities(pId): Promise<BoomrangModel.InformationDto[]> {
    try {
      let context = await this.getContext();
      return await context.masterData.getCities(pId).toArray();
    } catch (err) {
      throw err;
    }
  }

  async signupUser(
    UserName: string, Password: string, MobileNo: string, FirstName: string, LastName: string, Gender: Boomrang.Model.Enum.Gender, RoleType: Boomrang.Model.Enum.RoleType
  ): Promise<void> {
    try {
      var context = await this.getContext();
      return await context.account.registerUserAsync(UserName, Password, MobileNo, FirstName, LastName, Gender, RoleType);
    } catch (err) {
      throw err
    }
  }
  async getCompanyInformation(mobileNo): Promise<Boomrang.Model.Dto.CompanyInformationDto[]> {
    try {
      var context = await this.getContext();
      return await context.operator.getCompanyInformation(mobileNo).toArray();
    } catch (err) {
      throw err;
    }
  } async getUsersInfo(mobileNo, roleType): Promise<Boomrang.Model.Dto.UserInfoDto[]> {
    try {
      var context = await this.getContext();
      return await context.admin.getUsersInfo(mobileNo, roleType).toArray();
    } catch (err) {
      throw err;
    }
  }

  async saveCompanyInformation(data): Promise<void> {
    try {
      var context = await this.getContext();
      return await context.operator.saveCompanyInformation(data)
    } catch (err) {
      throw err;
    }
  }async deleteCompanyInformation(id): Promise<void> {
    try {
      var context = await this.getContext();
      return await context.operator.deleteCompanyInformation(id)
    } catch (err) {
      throw err;
    }
  }

}




