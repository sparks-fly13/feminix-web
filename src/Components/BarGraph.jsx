import { ResponsiveBar } from '@nivo/bar'
import useColors from '../Hooks/theme'
import {mockBarGraphData as data} from '../data/mockGraphData'

function BarGraph({isDashboard=false}) {
    const colors = useColors();

    return (
        <ResponsiveBar
        data={data}
        theme={{
            axis: {
                domain: {
                    line: {
                        stroke: colors.grey[100]
                    }
                },
                legend: {
                    text: {
                        fill: colors.grey[100]
                    }
                },
                ticks: {
                    line: {
                        stroke: colors.grey[100],
                        strokeWidth: 1
                    },
                    text: {
                        fill: colors.grey[100],
                        fontSize: 6.5
                    }
                }
            },
            legends: {
                text: {
                    fill: colors.grey[100]
                }
            }
        }}
        keys={[
            'Incident 1',
            'Incident 2',
            'Incident 3',
            'Incident 4',
            'Incident 5',
            'Incident 6'
        ]}
        indexBy="areas"
        margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
        padding={0.3}
        valueScale={{ type: 'linear' }}
        indexScale={{ type: 'band', round: true }}
        colors={{ scheme: 'red_blue' }}
        borderColor={{
            from: 'color',
            modifiers: [
                [
                    'darker',
                    '1.6'
                ]
            ]
        }}
        axisTop={null}
        axisRight={null}
        axisBottom={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: isDashboard ? undefined : 'areas',
            legendPosition: 'middle',
            legendOffset: 32
        }}
        axisLeft={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: isDashboard ? undefined : 'incidents',
            legendPosition: 'middle',
            legendOffset: -40
        }}
        enableLabel={false}
        labelSkipWidth={12}
        labelSkipHeight={12}
        labelTextColor={{
            from: 'color',
            modifiers: [
                [
                    'darker',
                    1.6
                ]
            ]
        }}
        legends={[
            {
                dataFrom: 'keys',
                anchor: 'bottom-right',
                direction: 'column',
                justify: false,
                translateX: 120,
                translateY: 0,
                itemsSpacing: 2,
                itemWidth: 100,
                itemHeight: 20,
                itemDirection: 'left-to-right',
                itemOpacity: 0.85,
                symbolSize: 20,
                effects: [
                    {
                        on: 'hover',
                        style: {
                            itemOpacity: 1
                        }
                    }
                ]
            }
        ]}
        role="application"
        ariaLabel="Nivo bar chart demo"
        barAriaLabel={e=>e.id+": "+e.formattedValue+" in areas: "+e.indexValue}
    />
    )
}

export default BarGraph;