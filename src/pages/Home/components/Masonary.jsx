import React, { useState } from "react";
import { photos } from "../../../Data/masonaryPhotos";
import Gallery from "react-photo-gallery";
import arrayMove from "array-move";
import { SortableContainer, SortableElement } from "react-sortable-hoc";
import Photo from "./Photo";

/* popout the browser and maximize to see more rows! -> */
const SortablePhoto = SortableElement(item => <Photo {...item} />);
const SortableGallery = SortableContainer(({ items }) => (
	<Gallery photos={items} renderImage={props => <SortablePhoto {...props} />} />
));

const Masonary = () => {
	const [items, setItems] = useState(photos);

	const onSortEnd = ({ oldIndex, newIndex }) => {
		setItems(arrayMove(items, oldIndex, newIndex));
	};

	return (
		<div className='py-10'>
			<SortableGallery items={items} onSortEnd={onSortEnd} axis={"xy"} />
		</div>
	);
};

export default Masonary;
