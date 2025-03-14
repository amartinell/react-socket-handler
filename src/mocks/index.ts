import { http, HttpResponse } from 'msw'
import {contentTree} from "./contentTree.ts";

export const handlers = [
  http.get('/api/v1/platform/contents', () => {
    return HttpResponse.json(contentTree)
  }),
]