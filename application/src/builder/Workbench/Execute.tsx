import React, { Component } from 'react'
import { Button } from 'reactstrap'
import ShareIcon from '../../static/images/share.svg'

import initCrypto, { KeyPair, KeyGenConfiguration } from '@iroha2/crypto'
import { createClient } from '@iroha2/client'
import { IrohaDataModel, Enum } from '@iroha2/data-model'
import JSBI from 'jsbi'


const client = createClient({
    // To avoid CORS-related problems, make requests to your base URL and
    // configure proxy in dev server. More info here:
    // https://vitejs.dev/config/#server-proxy
    toriiURL: '/'
});

// const adminPriv = 'f101537e319568c765b2cc89698325604991dca57b9716b58016b253506cab70'

interface Props {
    workingBlocks: { component: string }[]
}


export default class Execute extends Component<Props> {
    private keypair: KeyPair | undefined;

    render() {
        return (
            <Button color="" onClick={() => { this.submitWorkingBlocks() }}><img src={ShareIcon} /></Button>
        )
    }

    async submitWorkingBlocks() {
        await this.prepareCrypto();

        // TODO map `workingBlocks` to a format that is compatible with the IrohaTypes
        // here is just an example
        const instructions: IrohaDataModel['iroha_data_model::isi::Instruction'][] = [
            this.exampleCreateAccountISI({
                name: 'test',
                domainName: 'test domain'
            })
        ];

        await client.submitTransaction({
            payload: {
                // put here your account id
                accountId: {
                    name: 'admin',
                    domainName: 'test'
                },

                // put here your instructions
                instructions,

                // other stuff
                creationTime: JSBI.BigInt(Date.now()),
                timeToLiveMs: JSBI.BigInt(100_000),
                metadata: new Map()
            },

            // and here put your key pair(s)
            signing: this.keypair!
        })

        // for (let i = 0; i < this.props.workingBlocks.length; i++) {
        //     switch (this.props.workingBlocks[i].component) {
        //         case 'registeraccount':
        //             this.transactionArray.push(this.createAccountTx(this.props.workingBlocks[i]));
        //             break;
        //         case 'registerdomain':
        //             this.transactionArray.push(this.createDomainTx(this.props.workingBlocks[i]));
        //             break;
        //         case 'registerasset':
        //             this.transactionArray.push(this.createAssetTx(this.props.workingBlocks[i]));
        //             break;
        //         case 'mintasset':
        //             this.transactionArray.push(this.createMintAssetTx(this.props.workingBlocks[i]));
        //             break;
        //     }
        // }
        // this.batchBuilder();
    }

    /**
     * Preparation of key pair (if not prepared yet)
     */
    async prepareCrypto(): Promise<void> {
        if (this.keypair) return

        // I've put crypto initialisation here, but it should be called somewhere in component's lifecycle hooks
        // and have to be awaited for the initialisation completed before usage of the crypto
        // Anyway, it will be initialised only once
        await initCrypto("/node_modules/@iroha2/crypto/wasm/iroha_crypto_bg.wasm");

        // for example, let's generate keypair from some random seed
        this.keypair = KeyPair.generate_with_configuration(
            new KeyGenConfiguration().use_seed(new Uint8Array([1, 2, 3, 4]))
        )
    }

    exampleCreateAccountISI(accountId: IrohaDataModel['iroha_data_model::account::Id']): IrohaDataModel['iroha_data_model::isi::Instruction'] {
        const newAccount: IrohaDataModel['iroha_data_model::account::NewAccount'] = {
            id: accountId,
            signatories: [],
            metadata: { map: new Map() }
        }

        const regBox: IrohaDataModel['iroha_data_model::isi::RegisterBox'] = {
            object: {
                expression: Enum.create('Raw', Enum.create('Identifiable', Enum.create('NewAccount', newAccount)))
            }
        }

        return Enum.create('Register', regBox)
    }

    // batchBuilder() {
    //     new BatchBuilder(
    //         this.transactionArray
    //     )
    //         .setBatchMeta(0)
    //         .sign([adminPriv], 0)
    //         .sign([adminPriv], 1)
    //         .send(commandService)
    //         .then(res => console.log(res))
    //         .catch(err => console.error(err))
    // }

    // createAccountTx(block) {
    //     const createAccountTx = new TxBuilder()
    //     .createAccount({
    //         accountName: block.name,
    //         domainId: block.domainName,
    //         publicKey: block.key
    //     })
    //         .addMeta('admin@test', 1)
    //         .tx
    //     return createAccountTx;
    // }

    // createDomainTx(block) {
    //     const createDomainTx = new TxBuilder()
    //     .createDomain({
    //         domainId: block.name,
    //         defaultRole: "default"
    //     })
    //         .addMeta('admin@test', 1)
    //         .tx
    //     return createDomainTx;
    // }

    // createAssetTx(block) {
    //     const createAssetTx = new TxBuilder()
    //     .createAsset({
    //         assetName: block.name,
    //         domainId: block.domainName,
    //         precision: 32
    //     })
    //         .addMeta('admin@test', 1)
    //         .tx
    //     return createAssetTx;
    // }

    // createMintAssetTx(block) {
    //     if (block.mintOrBurn === "mint") {
    //         const mintAssetTx = new TxBuilder()
    //         .addAssetQuantity({
    //             assetId: block.asset_id,
    //             amount: block.quantity
    //         })
    //             .addMeta('admin@test', 1)
    //             .tx
    //         return mintAssetTx;
    //     } else {
    //         const burnAssetTx = new TxBuilder()
    //         .subtractAssetQuantity({
    //             assetId: block.asset_id,
    //             amount: block.quantity
    //         })
    //             .addMeta('admin@test', 1)
    //             .tx
    //         return burnAssetTx;
    //     }
    // }
}