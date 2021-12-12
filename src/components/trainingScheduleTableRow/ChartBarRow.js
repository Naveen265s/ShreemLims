import React from "react";

function ChartBarRow({ data }) {
    return (
        <g>
            <rect
                x={data.x}
                y={data.y}
                rx={data.height*0.5}
                ry={data.height*0.5}
                width={data.width}
                height={data.height}
                fill={data.fill1}
                style={{ opacity: 1 }}
            />
            <rect
                x={data.x+1}
                y={data.y+1}
                rx={data.height*0.5}
                ry={data.height*0.5}
                width={data.width*(80/100)}
                height={data.height-2}
                fill={data.fill2}
                style={{ opacity: 1 }}
            />
            <text x={data.x+(data.width*0.15)} y={data.y+(data.height*0.70)} fill="black">
                {data.title}
            </text>
        </g>
    );
}

export default ChartBarRow;
