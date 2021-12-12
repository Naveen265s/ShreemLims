import React from "react";

function ChartBgColumn({ data }) {
    return (
        <g>
            <text x={data.x} y={data.y} fill={data.tcolor}>
                {data.title}
            </text>
            <rect
                x={data.x}
                y={data.y + 5}
                width={data.width}
                height={data.height}
                fill={data.rcolor}
                style={{ opacity: 0.2 }}
            />
        </g>
    );
}

export default ChartBgColumn;
