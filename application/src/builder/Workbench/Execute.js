import React, {Component} from 'react'
import {Button} from 'reactstrap'
import ShareIcon from '../../static/images/share.svg'

import {
    CommandService_v1Client as CommandService,
    QueryService_v1Client as QueryService
} from 'iroha-helpers/lib/proto/endpoint_pb_service'
import {TxBuilder} from 'iroha-helpers/lib/chain'

const IROHA_ADDRESS = "localhost:50051"

const adminPriv = 'f101537e319568c765b2cc89698325604991dca57b9716b58016b253506cab70'

const commandService = new CommandService(IROHA_ADDRESS)
const queryService = new QueryService(IROHA_ADDRESS)

export default class Execute extends Component{
    render(){
        return(
            <Button color=""><img src={ShareIcon}/></Button>
        )
    }
}