import { graphql } from '~/shared/api/gql';

export const GetMeDocument = graphql(`
	query Me {
		me {
			id
			email
			role
		}
	}
`);
