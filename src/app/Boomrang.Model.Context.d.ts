/// <reference path="../../node_modules/@bit/jaydata/jaydata.d.ts" />

declare module Auto {
	
	class AutoOperatorDto extends $data.Entity {
				    
			Id : string;
			static Id : any;
			}
}


declare module Auto {
	
	class AutoMasterDataDto extends $data.Entity {
				    
			Id : string;
			static Id : any;
			}
}


declare module Auto {
	
	class AutoAdminDto extends $data.Entity {
				    
			Id : string;
			static Id : any;
			}
}


declare module Auto {
	
	class AutoAccountDto extends $data.Entity {
				    
			Id : string;
			static Id : any;
			}
}




    
	interface AccountEntitySet extends $data.EntitySet<Auto.AutoAccountDto>{
			}
    
	interface AdminEntitySet extends $data.EntitySet<Auto.AutoAdminDto>{
			}
    
	interface MasterDataEntitySet extends $data.EntitySet<Auto.AutoMasterDataDto>{
			}
    
	interface OperatorEntitySet extends $data.EntitySet<Auto.AutoOperatorDto>{
			}

declare class AppContext extends $data.EntityContext {

		    
		account: AccountEntitySet;
		    
		admin: AdminEntitySet;
		    
		masterData: MasterDataEntitySet;
		    
		operator: OperatorEntitySet;
	
}

	import BoomrangModel = Boomrang.Model.Dto;
	import BoomrangEnum = Boomrang.Model.Enum;

