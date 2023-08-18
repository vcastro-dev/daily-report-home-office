import * as React from 'react';
import { Stack } from "office-ui-fabric-react"
import { ActionsColumnProps } from './ActionsColumn.props';
import { IconButton } from '@fluentui/react';

export function ActionsColumn(props: ActionsColumnProps): JSX.Element {
    const {
        isEmployee,
        isManager,
        status,
        item,
        onEdit,
        onApprove,
        onReject
    } = props
    const styles = {
        fontSize: '1rem'
    }
    return <Stack 
        horizontal
        tokens={{
            childrenGap: 'm'
        }}>
        {
            isEmployee && status === 'Draft' && (
                <>
                    <IconButton iconProps={{iconName:"Edit"}} style={styles} onClick={() => onEdit(item)}/>
                </>
            ) ||
            isManager && status === 'In review' && (
                <>
                    <IconButton iconProps={{iconName:"Accept"}} style={styles} onClick={() => onApprove(item)}/>
                    <IconButton iconProps={{iconName:"Cancel"}} style={styles} onClick={() => onReject(item)}/>
                </>
            )
        }
    </Stack>
}