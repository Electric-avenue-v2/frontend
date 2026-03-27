import { graphql } from '~/shared/api/gql';

export const GetUsersDocument = graphql(`
	query Me {
		me {
			email
		}
	}
`);
