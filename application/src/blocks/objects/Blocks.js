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
    constructor(id, component = 'mintasset', mintOrBurn = '', asset_id = '', account_id = '', quantity = 0){
        this.id = id;
        this.component = component;
        this.mintOrBurn = mintOrBurn;
        this.asset_id = asset_id;
        this.account_id = account_id;
        this.quantity = quantity;
    }
}

export { RegDomainObj, RegAccountObj, RegAssetObj, UnregObj, MintAssetObj }