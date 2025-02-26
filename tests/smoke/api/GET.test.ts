import { ReportingApi } from '@reportportal/agent-js-playwright';
import { APIActions } from '../../../lib/APIActions';
import { test } from '@playwright/test';

const apiActions = new APIActions();

test(`getUsers`, { tag: '@API'}, async ({ request }) => {
    const response = await request.get(`https://reqres.in/api/users?per_page=1`);
    await apiActions.verifyStatusCode(response);

    //* Body Response Params and Body Response Headers are stored in single text file separated by #
    const responseBodyParams = (await apiActions.readValuesFromTextFile(`getUsers`)).split(`#`)[0];
    await apiActions.verifyResponseBody(responseBodyParams, await response.json(), `Response Body`);

    const responseBodyHeaders = (await apiActions.readValuesFromTextFile(`getUsers`)).split(`#`)[1];
    await apiActions.verifyResponseHeader(responseBodyHeaders, response.headersArray(), `Response Headers`);

    ReportingApi.info('Test Passed');

});