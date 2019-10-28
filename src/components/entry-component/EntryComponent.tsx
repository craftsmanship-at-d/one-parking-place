import React from 'react';
import './EntryComponent.css';
import RvHookupIcon from '@material-ui/icons/RvHookup';

export class EntryComponent extends React.Component <any, any> {

    public render(): any {
        return (
            <div className="entry">
                <RvHookupIcon className="entry"/>
            </div>
        );
    }

}
