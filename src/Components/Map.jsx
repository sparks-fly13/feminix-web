import { ResponsiveChoropleth } from '@nivo/geo';
import {geoFeatures} from '../data/mockGeoFeatures';
import useColors from '../Hooks/theme';
import { mockMapData as data } from '../data/mockGraphData';

function Map({isDashboard = false}) {
    const colors = useColors();

    return (
        <ResponsiveChoropleth
        data={data}
        theme={{
            axis: {
                domain: {
                    line: {
                        stroke: colors.primary[100]
                    }
                },
                legend: {
                    text: {
                        fill: colors.primary[100]
                    }
                },
                ticks: {
                    line: {
                        stroke: colors.primary[100],
                        strokeWidth: 1
                    },
                    text: {
                        fill: colors.primary[100]
                    }
                }
            },
            legends: {
                text: {
                    fill: colors.primary[100]
                }
            }
        }}
        features={geoFeatures.features}
        margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
        domain={[ 0, 1000000 ]}
        unknownColor="#666666"
        label="properties.name"
        valueFormat=".2s"
        projectionScale={isDashboard ? 40 : 140}
        projectionTranslation={isDashboard ? [0.49, 0.6] : [ 0.5, 0.5 ]}
        projectionRotation={[ 0, 0, 0 ]}
        borderWidth={1.5}
        borderColor={colors.primary[100]}
        defs={[
            {
                id: 'gradient',
                type: 'linearGradient',
                colors: [
                    {
                        offset: 0,
                        color: '#000'
                    },
                    {
                        offset: 100,
                        color: 'inherit'
                    }
                ]
            }
        ]}
        fill={[
            {
                match: {
                    id: 'IND'
                },
                id: 'gradient'
            }
        ]}
        legends={ isDashboard ? undefined : [
            {
                anchor: 'bottom-left',
                direction: 'column',
                justify: true,
                translateX: 20,
                translateY: -100,
                itemsSpacing: 0,
                itemWidth: 94,
                itemHeight: 18,
                itemDirection: 'left-to-right',
                itemTextColor: colors.primary[100],
                itemOpacity: 0.85,
                symbolSize: 18,
                effects: [
                    {
                        on: 'hover',
                        style: {
                            itemTextColor: "#ffffff",
                            itemOpacity: 1
                        }
                    }
                ]
            }
        ]}
    />
    );
}

export default Map;