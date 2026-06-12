import type {
        IAuthenticateGeneric,
        Icon,
        ICredentialType,
        INodeProperties,
} from 'n8n-workflow';

export class AzureApplicationinsightsComponentannotationsApiApi implements ICredentialType {
        name = 'N8nDevAzureApplicationinsightsComponentannotationsApiApi';

        displayName = 'Azure Applicationinsights Componentannotations API';

        icon: Icon = { light: 'file:../nodes/AzureApplicationinsightsComponentannotationsApi/azure-applicationinsights-componentannotations-api.png', dark: 'file:../nodes/AzureApplicationinsightsComponentannotationsApi/azure-applicationinsights-componentannotations-api.dark.png' };

        documentationUrl = '';

        properties: INodeProperties[] = [
          {
                        displayName: 'Base URL',
                        name: 'url',
                        type: 'string',
                        default: '',
                        required: true,
                        placeholder: 'https://api.example.com',
                        description: 'The base URL of your Azure Applicationinsights Componentannotations API server',
                },
                {
                        displayName: 'API Key',
                        name: 'apiKey',
                        type: 'string',
                        typeOptions: { password: true },
                        default: '',
                        required: false,
                },
        
        ];

  authenticate: IAuthenticateGeneric = {
                type: 'generic',
                properties: {
                        headers: {
                                Authorization: '=Bearer {{$credentials.apiKey}}',
                        },
                },
        };


}
