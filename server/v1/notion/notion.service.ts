import { Client } from '@notionhq/client';
import { QueryDatabaseFilterParameters, QueryDatabaseResponse } from '@server/v1/types/notion.types';

const notion = new Client({ auth: process.env.NOTION_API_KEY });

async function fetchNotionData(id: string, filter: QueryDatabaseFilterParameters): Promise<QueryDatabaseResponse> {
    return new Promise<QueryDatabaseResponse>((resolve) => {
        if (Object.keys(filter).length === 0) {
            resolve(notion.databases.query({ database_id: id }));
        }
        else {
            resolve(notion.databases.query({ database_id: id, filter }));
        }
    });
}

export default {
    fetchNotionData,
};
