

		 var   Auto = Auto || {};

Auto.AutoOperatorDto = $data.Entity.extend("Auto.AutoOperatorDto", {
	 
		Id: {
			"type": "Edm.Guid" , nullable: true
															, "key": true
			, "required" : false
			, "computed": true
										},
		});


		 var   Auto = Auto || {};

Auto.AutoMasterDataDto = $data.Entity.extend("Auto.AutoMasterDataDto", {
	 
		Id: {
			"type": "Edm.Guid" , nullable: true
															, "key": true
			, "required" : false
			, "computed": true
										},
		});


		 var   Auto = Auto || {};

Auto.AutoAdminDto = $data.Entity.extend("Auto.AutoAdminDto", {
	 
		Id: {
			"type": "Edm.Guid" , nullable: true
															, "key": true
			, "required" : false
			, "computed": true
										},
		});


		 var   Auto = Auto || {};

Auto.AutoAccountDto = $data.Entity.extend("Auto.AutoAccountDto", {
	 
		Id: {
			"type": "Edm.Guid" , nullable: true
															, "key": true
			, "required" : false
			, "computed": true
										},
		});



AppContext = $data.EntityContext.extend("AppContext", {
			account : {
			"type": "$data.EntitySet",
			"elementType": "Auto.AutoAccountDto",
					},
			admin : {
			"type": "$data.EntitySet",
			"elementType": "Auto.AutoAdminDto",
					},
			masterData : {
			"type": "$data.EntitySet",
			"elementType": "Auto.AutoMasterDataDto",
					},
			operator : {
			"type": "$data.EntitySet",
			"elementType": "Auto.AutoOperatorDto",
					},
	});

	BoomrangModel = Boomrang.Model.Dto;
	BoomrangEnum = Boomrang.Model.Enum;

