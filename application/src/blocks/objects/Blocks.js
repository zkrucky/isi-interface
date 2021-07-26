class RegDomainObj {
    constructor(id, component = 'registerdomain', name = '') {
        this.id = id;
        this.component = component;
        this.name = name;
    }
}

class RegAccountObj {
    constructor(id, component = 'registeraccount', name = '', key = '', domainName = '') {
        this.id = id;
        this.component = component;
        this.name = name;
        this.key = key;
        this.domainName = domainName;
    }
}

class RegAssetObj {
    constructor(id, component = 'registerasset', name = '', domainName = '') {
        this.id = id;
        this.component = component;
        this.name = name;
        this.domainName = domainName;
    }
}


class UnregObj {
    constructor(id, component = 'unregister') {
        this.id = id;
        this.component = component;
    }
}

class MintAssetObj {
    constructor(id, component = 'mintasset', mintOrBurn = 'mint', asset_id = '', account_id = '', quantity = 0){
        this.id = id;
        this.component = component;
        this.mintOrBurn = mintOrBurn;
        this.asset_id = asset_id;
        this.account_id = account_id;
        this.quantity = quantity;
    }
}

class TransferObj {
    constructor(id, component = "transfer", quantity = 0, asset_id_1 = '', asset_id_2 = ''){
        this.id = id;
        this.component = component;
        this.quantity = quantity;
        this.asset_id_1 = this.asset_id_1;
        this.asset_id_2 = this.asset_id_2;
    }
}

class FindAllObj {
    constructor(id, component="findall", variable = ''){
        this.id = id;
        this.component = component;
        this.variable = variable;
    }
}

class FindByObj {
    constructor(id, component="findby", variable = '', searchCondition = 'name', searchString = ''){
        this.id = id;
        this.component = component;
        this.variable = variable;
        this.searchCondition = searchCondition;
        this.searchString = searchString;
    }
}

export { RegDomainObj, RegAccountObj, RegAssetObj, UnregObj, MintAssetObj, TransferObj, FindAllObj, FindByObj }