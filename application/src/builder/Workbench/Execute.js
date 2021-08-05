import React, { Component } from 'react'
import { Button } from 'reactstrap'
import ShareIcon from '../../static/images/share.svg'

import {
    CommandService_v1Client as CommandService,
    QueryService_v1Client as QueryService
} from 'iroha-helpers/lib/proto/endpoint_pb_service'
import { TxBuilder, BatchBuilder } from 'iroha-helpers/lib/chain'

const IROHA_ADDRESS = "http://localhost:8081"

const adminPriv = 'f101537e319568c765b2cc89698325604991dca57b9716b58016b253506cab70'

const commandService = new CommandService(IROHA_ADDRESS)
const queryService = new QueryService(IROHA_ADDRESS)

export default class Execute extends Component {
    constructor(props) {
        super(props);
        this.transactionArray = [];
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
                    this.transactionArray.push(this.createAccountTx(this.props.workingBlocks[i]));
                    break;
                case 'registerdomain':
                    this.transactionArray.push(this.createDomainTx(this.props.workingBlocks[i]));
                    break;
                case 'registerasset':
                    this.transactionArray.push(this.createAssetTx(this.props.workingBlocks[i]));
                    break;
                case 'mintasset':
                    this.transactionArray.push(this.createMintAssetTx(this.props.workingBlocks[i]));
                    break;
            }
        }
        this.batchBuilder();
    }

    batchBuilder() {
        new BatchBuilder(
            this.transactionArray
        )
            .setBatchMeta(0)
            .sign([adminPriv], 0)
            .sign([adminPriv], 1)
            .send(commandService)
            .then(res => console.log(res))
            .catch(err => console.error(err))
    }

    createAccountTx(block) {
        const createAccountTx = new TxBuilder()
        .createAccount({
            accountName: block.name,
            domainId: block.domainName,
            publicKey: block.key
        })
            .addMeta('admin@test', 1)
            .tx
        return createAccountTx;
    }

    createDomainTx(block) {
        const createDomainTx = new TxBuilder()
        .createDomain({
            domainId: block.name,
            defaultRole: "default"
        })
            .addMeta('admin@test', 1)
            .tx
        return createDomainTx;
    }

    createAssetTx(block) {
        const createAssetTx = new TxBuilder()
        .createAsset({
            assetName: block.name,
            domainId: block.domainName,
            precision: 32
        })
            .addMeta('admin@test', 1)
            .tx
        return createAssetTx;
    }

    createMintAssetTx(block) {
        if (block.mintOrBurn === "mint") {
            const mintAssetTx = new TxBuilder()
            .addAssetQuantity({
                assetId: block.asset_id,
                amount: block.quantity
            })
                .addMeta('admin@test', 1)
                .tx
            return mintAssetTx;
        } else {
            const burnAssetTx = new TxBuilder()
            .subtractAssetQuantity({
                assetId: block.asset_id,
                amount: block.quantity
            })
                .addMeta('admin@test', 1)
                .tx
            return burnAssetTx;
        }
    }
}