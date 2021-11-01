import React from 'react'
import { PieChart } from 'react-native-svg-charts'
import { Text as SVGText } from 'react-native-svg'
import { StyleSheet, Button, TextInput, View,Text} from 'react-native';

class PieChartWithCenteredLabels extends React.PureComponent {

    render() {

        const data = [
            {
                key: 1,
                amount: 624.90,
                SVGText:'Manutençao',
                svg: { fill: '#000080' },
            },
            {
                key: 2,
                amount: 756.70,
                svg: { fill: '#7991CF' }
            },
            {
                key: 3,
                amount: 437.62,
                svg: { fill: '#3F6AB7' }
            },
          ]

        const Labels = ({ slices, height, width }) => {
            return slices.map((slice, index) => {
                const { labelCentroid, pieCentroid, data } = slice;
                return (
                    <SVGText
                        key={index}
                        x={pieCentroid[ 0 ]}
                        y={pieCentroid[ 1 ]}
                        fill={'white'}
                        textAnchor={'middle'}
                        alignmentBaseline={'middle'}
                        fontSize={20  }
                        stroke={'black'}
                        strokeWidth={0.2}
                    >
                        {data.amount}
                    </SVGText>
                )
            })
        }

        return (
          <View>
            <Text style={styles.texto}>Gastos da Frota</Text>

            <PieChart
                style={{ height: 300, marginTop: 30,textAlign: 'center', }}
                valueAccessor={({ item }) => item.amount}
                data={data}
                spacing={0}
                outerRadius={'100%'}
                innerRadius={10}
            >
                <Labels/>
            </PieChart>
            <Text style={styles.valorTotal}>Total: R$5419,22</Text>
          </View>
        )
    }

}

export default PieChartWithCenteredLabels
const styles = StyleSheet.create ({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  map: {
   height: '100%',
   width: '100%',
 },
 texto:{
  width: '100 %',
  fontWeight: 'bold',
  color: '#000080',
  fontSize: 45,
  textAlign: 'center',
 },
 valorTotal:{
  marginTop: 30,
  width: '100 %',
  fontWeight: 'bold',
  color: '#000080',
  fontSize: 25,
  textAlign: 'center',
 },
});