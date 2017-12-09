import commentReducer from '../../reducers/comments';
import { SAVE_COMMENT } from '../../actions/types';

describe('Comments Reducer', () => {
	it('handles action with unknown action type', () => {
		expect(commentReducer(undefined, {})).toEqual([]);
	});
	it('handles save comment action', () => {
		const action = {
			type: SAVE_COMMENT,
			payload: 'new comment'
		};
		expect(commentReducer([], action)).toEqual(['new comment']);
	});
});
