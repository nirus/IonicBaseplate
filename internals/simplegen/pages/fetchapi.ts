import request, { BaseplateResp } from 'src/baseplate/request';
import { Api } from './constants';

export function fetchSimpleApi() : Promise<BaseplateResp> {
    return request(Api.sample, {
        headers: { 'content-type': 'text/plain' }
    });
}