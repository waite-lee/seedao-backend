import { Request, Response } from 'express';
import reqResponse from '@server/cors/responseHandler';
import { QueryDatabaseFilterParameters } from '@server/v1/types/notion.types';

import notionService from './notion.service';

function fetchNotionData(req: Request, res: Response): void {
    try {
        const id = req.body.databaseId as string;
        const filter = req.body.filter as QueryDatabaseFilterParameters;
        notionService.fetchNotionData(id, filter).then((ret) => reqResponse.success(res, ret as object))
            .catch(() => reqResponse.serverError(res));
    } catch (error) {
        reqResponse.parameterMissingError(res);
    }
}

export default {
    fetchNotionData,
};
