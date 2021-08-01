import grpc from 'grpc';
import {
    CommandService_v1Client as CommandService,
    QueryService_v1Client as QueryService
} from 'iroha-helpers/lib/proto/endpoint_grpc_pb'

import commands from 'iroha-helpers/lib/commands'
import queries from 'iroha-helpers/lib/queries'

const IROHA_ADDRESS = "localhost:50051"

const adminPriv = 'f101537e319568c765b2cc89698325604991dca57b9716b58016b253506cab70'

const commandService = new CommandService(
    IROHA_ADDRESS,
    grpc.credentials.createInsecure()
)

const queryService = new QueryService(
    IROHA_ADDRESS,
    grpc.credentials.createInsecure()
)

queries.fetchCommits(
    {
        privateKey: adminPriv,
        creatorAccountId: 'admin@test',
        queryService,
        timeoutLimit: 5000
    },
    (block) => console.log('fetchCommits new block:', block),
    (error) => console.error('fetchCommits failed:', error.stack)
)

Promise.all([
    
])