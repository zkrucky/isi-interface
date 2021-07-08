class RegDomain {
    constructor(id, component = 'registerdomain', name = '') {
        this.id = id;
        this.component = component;
        this.name = name;
    }
}

class RegAccount {
    constructor(id, component = 'registeraccount', name = '', key = '', domainName = '') {
        this.id = id;
        this.component = component;
        this.name = name;
        this.key = key;
        this.domainName = domainName;
    }
}

class RegAsset {
    constructor(id, component = 'registerasset', name = '', domainName = '') {
        this.id = id;
        this.component = component;
        this.name = name;
        this.domainName = domainName;
    }
}


class Unreg {
    constructor(id, component = 'unregister') {
        this.id = id;
        this.component = component;
    }
}

export { RegDomain, RegAccount, RegAsset, Unreg }