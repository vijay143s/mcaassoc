import React from 'react';
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import useWindowDimensions from '../app/WindowDimentions';
import { useSelector } from 'react-redux';


export default function LoadingIndicator(props) {
    const { height, width, top } = useWindowDimensions();
    const loading = useSelector(state => state.currentuser.loading);

    if (props.variant === "table") {
        return (
            <>
                {
                    Array(props.count).fill().map((key) => {
                        return (
                            <tr key={key}>
                                <td colSpan={props.columns}>
                                    <SkeletonTheme highlightColor="#ccc">
                                        <Skeleton width={"100%"} duration={1} height={"100%"} />
                                    </SkeletonTheme>
                                </td>
                            </tr>
                        )
                    })
                }
            </>
        )
    } else if (props.variant === "loader-w" || props.variant === "loader-b") {
        return (
            <div style={props.style}>
            </div>
        )
    } else if (!props.variant || props.variant === "loader") {
        return (
            <>
                <div className="trnsDIV" style={{ display: loading ? '' : 'none', border: "1px solid black", position: "absolute", top: top, height: height, width: width, background: 'rgba(0, 0, 0, 0.56)', zIndex: 2000 }}>
                    <div style={{ display: loading ? '' : 'none', position: "absolute", opacity: 2, zIndex: 10000, top: (top + (height / 2)) - 60, left: (width / 2) - 60 }}>
                    </div>
                </div>
            </>
        )
    }
}