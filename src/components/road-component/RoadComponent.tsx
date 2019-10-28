import CropSquareIcon from '@material-ui/icons/CropSquare';
import React from 'react';
import './RoadComponent.css';

export class RoadComponent extends React.Component {

    public render(): any {
        return (
            <div className="size">
                <CropSquareIcon className="invisible"/>
            </div>
        );
    }
}
