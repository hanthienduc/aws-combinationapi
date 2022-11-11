import { AWS } from "@serverless/typescript"

const functions: AWS['functions'] = {
    combinationAPI: {
        handler: 'src/functions/combination/index.handler',
        events: [
            {
                httpApi: {
                    path: '/gameDeals',
                    method: 'get',
                },
            },
        ],
    },
}

export default functions
