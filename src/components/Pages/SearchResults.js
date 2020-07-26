import React from 'react';
import CharacterCard from '../CharacterCard/CharacterCard';

const SearchResults = (props) => {
    return (
        <div className="cont">
			<div className="row">
				{
					props.data.map((d) => {
						return (
							<div className="col-sm-4" key={d.char_id}>
								<CharacterCard data={d} />
							</div>
						);
					})
				}
			</div>
		</div>
    );
};

export default SearchResults;