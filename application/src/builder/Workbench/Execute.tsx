import React, { Component } from 'react'
import { Button } from 'reactstrap'
import ShareIcon from '../../static/images/share.svg'

import { createClient, IrohaDataModel, Enum } from '@iroha2/client';
import { KeyGenConfiguration, KeyPair } from '@iroha2/crypto';
import JSBI from 'jsbi';
import InputGroupWithExtras from 'react-bootstrap/esm/InputGroup';

/*
const keyPair = KeyPair.generate_with_configuration(new KeyGenConfiguration());

const client = createClient({
    toriiURL: 'http://localhost:8080'
});
*/

let transactionArray: any = [];

interface IProps {
    workingBlocks: any;
}

interface IState {
}

export default class Execute extends Component<IProps, IState> {
    constructor(props: any) {
        super(props);
        let transactionArray: any = [];
    }

    render() {
        return (
            <Button color="" onClick={() => {this.transactionArrayBuilder()}}><img src={ShareIcon} /></Button>
        )
    }

    transactionArrayBuilder() {
        for (let i = 0; i < this.props.workingBlocks.length; i++) {
            switch (this.props.workingBlocks[i].component) {
                case 'registeraccount':
                    transactionArray.push(this.createAccountTx(this.props.workingBlocks[i]));
                    break;
                case 'registerdomain':
                    transactionArray.push(this.createDomainTx(this.props.workingBlocks[i]));
                    break;
                case 'registerasset':
                    transactionArray.push(this.createAssetTx(this.props.workingBlocks[i]));
                    break;
                case 'mintasset':
                    transactionArray.push(this.createMintAssetTx(this.props.workingBlocks[i]));
                    break;
                default:
                    break;
            }
        }
        this.batchBuilder();
    }

    batchBuilder() {

    }

    createAccountTx(block: any) {
        /*
        const newAccountId: IrohaDataModel['iroha_data_model::account::Id'] = {
            name: block.name,
            domainName: block.domainName,
        };
        const registerBox: IrohaDataModel['iroha_data_model::isi::RegisterBox'] = {
            object: {
                expression: Enum.create(
                    'Raw',
                    Enum.create(
                        'Identifiable',
                        Enum.create('NewAccount', {
                            id: newAccountId,
                            signatories: [],
                            metadata: {
                                map: new Map(),
                            },
                        }),
                    ),
                ),
            },
        };
        */
    }

    createDomainTx(block: any) {

    }

    createAssetTx(block: any) {

    }

    createMintAssetTx(block: any) {
        if (block.mintOrBurn === "mint") {

        } else {

        }
    }
}