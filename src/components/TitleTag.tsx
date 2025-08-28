'use client';

import React, { useState, useLayoutEffect, useRef } from 'react';

interface TitleTagProps {
    text: string;
    paddingX?: number;
    paddingY?: number;
    fontSize?: number;
    fontFamily?: string;
    fontWeight?: string | number;
    fillColor?: string;
    textColor?: string;
    className?: string;
}

export default function TitleTag({
    text,
    paddingX = 45,
    paddingY = 20,
    fontSize = 36,
    fontFamily = "Cooper, sans-serif",
    fontWeight = "black",
    fillColor = "#102C54",
    textColor = "white",
    className = ""
}: TitleTagProps) {
    const textRef = useRef<SVGTextElement>(null);
    const [svgWidth, setSvgWidth] = useState(0);
    const [svgHeight, setSvgHeight] = useState(0);
    const [textOffsetX, setTextOffsetX] = useState(0);
    const [textOffsetY, setTextOffsetY] = useState(0);

    const ORIGINAL_SHAPE_MAX_X = 277.51;
    const ORIGINAL_SHAPE_MAX_Y = 96.1298;

    const ORIGINAL_TEXT_REGION_START_X = 45.8304;
    const ORIGINAL_TEXT_REGION_END_X = ORIGINAL_SHAPE_MAX_X;
    const ORIGINAL_TEXT_REGION_WIDTH = ORIGINAL_TEXT_REGION_END_X - ORIGINAL_TEXT_REGION_START_X;
    
    const ORIGINAL_TEXT_REGION_START_Y = 3.25977;
    const ORIGINAL_TEXT_REGION_END_Y = ORIGINAL_SHAPE_MAX_Y;
    const ORIGINAL_TEXT_REGION_HEIGHT = ORIGINAL_TEXT_REGION_END_Y - ORIGINAL_TEXT_REGION_START_Y;

    useLayoutEffect(() => {
        if (textRef.current) {
            const bbox = textRef.current.getBBox();
            const actualTextWidth = bbox.width;
            const actualTextHeight = bbox.height;

            const desiredMainBodyWidth = actualTextWidth + paddingX * 2;
            const desiredMainBodyHeight = actualTextHeight + paddingY * 2;

            const scaleFactorX = desiredMainBodyWidth / ORIGINAL_TEXT_REGION_WIDTH;
            const scaleFactorY = desiredMainBodyHeight / ORIGINAL_TEXT_REGION_HEIGHT;

            const effectiveScaleFactor = Math.max(scaleFactorX, scaleFactorY);

            const newShapeWidth = ORIGINAL_SHAPE_MAX_X * effectiveScaleFactor;
            const newShapeHeight = ORIGINAL_SHAPE_MAX_Y * effectiveScaleFactor;
            
            setSvgWidth(newShapeWidth);
            setSvgHeight(newShapeHeight);

            const scaledTextRegionStartX = ORIGINAL_TEXT_REGION_START_X * effectiveScaleFactor;
            setTextOffsetX(scaledTextRegionStartX + desiredMainBodyWidth / 2);
            setTextOffsetY(newShapeHeight / 2);
        }
    }, [text, paddingX, paddingY, fontSize, fontFamily, fontWeight]);

    if (svgWidth === 0) {
        return (
            <svg style={{ position: 'absolute', visibility: 'hidden', zIndex: -1 }}>
                <text ref={textRef} fontSize={fontSize} fontFamily={fontFamily} fontWeight={fontWeight}>
                    {text}
                </text>
            </svg>
        );
    }

    const pathScaleX = svgWidth / ORIGINAL_SHAPE_MAX_X;
    const pathScaleY = svgHeight / ORIGINAL_SHAPE_MAX_Y;

    const p = (x: number, y: number) => `${x * pathScaleX} ${y * pathScaleY}`;

    const pathData = [
        `M ${p(277.51, 23.0997)}`,
        `V ${p(277.51, 76.2897).split(' ')[1]}`,
        `C ${p(277.51, 87.2497)}, ${p(268.63, 96.1298)}, ${p(257.67, 96.1298)}`,
        `H ${p(45.8304, 96.1298).split(' ')[0]}`,
        `C ${p(34.8704, 96.1298)}, ${p(25.9903, 87.2497)}, ${p(25.9903, 76.2897)}`,
        `L ${p(6.77029, 57.6097)}`,
        `C ${p(2.31029, 53.2697)}, ${p(2.31029, 46.1097)}, ${p(6.77029, 41.7797)}`,
        `L ${p(25.9903, 23.0997)}`,
        `C ${p(25.9903, 12.1397)}, ${p(34.8704, 3.25977)}, ${p(45.8304, 3.25977)}`,
        `H ${p(257.67, 3.25977).split(' ')[0]}`,
        `C ${p(268.63, 3.25977)}, ${p(277.51, 12.1397)}, ${p(277.51, 23.0997)}`,
        `V ${p(277.51, 23.0997).split(' ')[1]}`,
        `Z`
    ].join(' ');

    return (
        <svg
            className={className ? className : ""}
            width={svgWidth}
            height={svgHeight}
            viewBox={`0 0 ${svgWidth} ${svgHeight}`}
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={{ filter: `drop-shadow(7px 7px 5px rgba(0, 0, 0, 0.2))`, zIndex: 10 }}
        >
            <path d={pathData} fill={fillColor} />
            <text
                x={textOffsetX}
                y={textOffsetY}
                dominantBaseline="middle"
                textAnchor="middle"
                fill={textColor}
                fontSize={fontSize}
                fontFamily={fontFamily}
                fontWeight={fontWeight}
            >
                {text}
            </text>
        </svg>
    );
};