import type { ResultOf } from '@graphql-typed-document-node/core';
import type { GetMeDocument } from '../api/user.queries';

export type MeResponse = ResultOf<typeof GetMeDocument>['me'];
