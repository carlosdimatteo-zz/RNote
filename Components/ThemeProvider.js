import React,{Component} from 'react'

export const Theme = React.createContext()

export default class ThemeProvider extends Component{


        state={
            colors:{
                primary:"#000000",
                secondary:"#000000",
                dark:"#000000",
                light:"#000000",
                textDefault:"#FFFFFF",
                textPrimary:"#FFFFFF",
                textSecondary:"##FFFFFF",

            }
        }

    changeColorScheme(colorsArray){
        let colorScheme={}
        let values = Object.keys(this.state.colors)
        values.map((values,index)=>{
            colorScheme[values]=colorsArray[index]
        })
        console.log("new color scheme  "+colorScheme);
        this.setState({colors:colorScheme})

    }

        changeTheme(scheme){
            console.log("will change color scheme to "+scheme)
            let colorsArray
            switch(scheme){
                case "night":
                     colorsArray=["#9E9E9E","#607D8B","#616161","#F5F5F5","#212121","#212121","#757575"]
                    this.changeColorScheme(colorsArray)
                    break;
                case "sun":
                     colorsArray=["#FFC107","#FF9800","#FFA000","#FFECB3","#212121","#212121","#757575"]
                    this.changeColorScheme(colorsArray)
                    break;
                case "blue":
                     colorsArray=["#3F51B5","#448AFF","#303F9F","#C5CAE9","#FFFFFF","#212121","#757575"]
                    this.changeColorScheme(colorsArray)
                    break;
                


            }
        }

    render(){
        return (
            <Theme.Provider value={{theme:this.state,
            changeTheme:(scheme)=>this.changeTheme(scheme)
            }
            }>
                {this.props.children}
            </Theme.Provider>
        )
    }

}