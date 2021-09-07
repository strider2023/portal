import React from 'react';
import Form from "@rjsf/material-ui";
import Button from "@material-ui/core/Button/Button";
import Grid from "@material-ui/core/Grid/Grid";

function AppForms(props) {
    const getColumns = (breakpoint) => {
        const col = (breakpoint === 'xs') ? props.columnsXs : props.columnsSm;
        if (col === 1) {
            return 12;
        }
        if (col === 2) {
            return 6;
        }
        if (col === 3) {
            return 4;
        }
        if (col === 4) {
            return 3;
        }
        return 12;
    };

    const getSpacing = () => {
        let spacing = 0;
        if (props.spacing != null) {
            spacing = props.spacing;
        }
        return spacing;
    };

    const ObjectFieldTemplate = (props) => {
        console.log(props.uiSchema);

        const getGridData = (element) => {
            if (props.uiSchema[element.name]) {
                // console.log(props.uiSchema[element.name]['ui:gridXs'] || 12, props.uiSchema[element.name]['ui:gridSm'] || 12)
                const valXs = props.uiSchema[element.name]['ui:gridXs'] || 12;
                const valSm = props.uiSchema[element.name]['ui:gridSm'] || 12;
                return (
                    <Grid item xs={valXs} sm={valSm} >
                        <div className="property-wrapper">
                            {element.content}
                        </div>
                    </Grid>);
            } else {
                return (
                    <Grid item xs={12}>
                        <div className="property-wrapper">
                            {element.content}
                        </div>
                    </Grid>);
            }
        }

        return (
            <div>
                <Grid container spacing={getSpacing()} >
                    {props.title}
                    {props.description}
                    {
                        props.properties.map(element => {
                            return getGridData(element)
                        })
                    }
                </Grid>
            </div >
        );
    };


    return (
        <>
            {!props.hide &&
                <Form {...props} ObjectFieldTemplate={ObjectFieldTemplate} >
                    {
                        props.children &&
                        <div>
                            {props.children}
                        </div>
                    }
                    {
                        !props.children &&
                        <div>
                            <Button type={"submit"} disabled={props.disabled} variant="contained" color="primary" style={{color: 'white', marginTop: '10px'}}>
                                {props.submitButtonText ? props.submitButtonText : "Submit"}
                            </Button>
                        </div>
                    }
                </Form>
            }
        </>
    )
}

export default AppForms
