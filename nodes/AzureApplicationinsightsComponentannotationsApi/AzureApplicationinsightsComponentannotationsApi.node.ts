import { NodeConnectionTypes, type INodeType, type INodeTypeDescription } from 'n8n-workflow';


export class AzureApplicationinsightsComponentannotationsApi implements INodeType {
        description: INodeTypeDescription = {
                displayName: 'Azure Applicationinsights Componentannotations API',
                name: 'N8nDevAzureApplicationinsightsComponentannotationsApi',
                icon: { light: 'file:./azure-applicationinsights-componentannotations-api.png', dark: 'file:./azure-applicationinsights-componentannotations-api.dark.png' },
                group: ['input'],
                version: 1,
                subtitle: '={{\$parameter["operation"] + ": " + \$parameter["resource"]}}',
                description: 'Azure App Insights Annotations client for component',
                defaults: { name: 'Azure Applicationinsights Componentannotations API' },
                usableAsTool: true,
                inputs: [NodeConnectionTypes.Main],
                outputs: [NodeConnectionTypes.Main],
                credentials: [
                        {
                                name: 'N8nDevAzureApplicationinsightsComponentannotationsApiApi',
                                required: true,
                        },
                ],
                requestDefaults: {
                        baseURL: '={{\$credentials.url}}',
                        headers: {
                                Accept: 'application/json',
                                'Content-Type': 'application/json',
                        },
                },
                properties: [
		{
			"displayName": "Resource",
			"name": "resource",
			"type": "options",
			"noDataExpression": true,
			"options": [],
			"default": ""
		},
		
                ],
        };
}
