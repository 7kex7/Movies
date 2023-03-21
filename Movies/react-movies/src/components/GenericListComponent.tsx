import Loading from "./Loading";
import React, { ReactElement } from 'react'

export default function GenericList(props: genericListProps) {
    if (!props.list) {
        if (props.loadingUI) {
            return props.loadingUI;
        }
        return <Loading />
    } else {
        return props.children
    }
}

interface genericListProps {
    list: any;
    loadingUI?: ReactElement;
    emptyListUI?: ReactElement;
    children: ReactElement;
}
